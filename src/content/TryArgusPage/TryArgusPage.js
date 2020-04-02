import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  TextInput,
  InlineNotification,
} from 'carbon-components-react';
import UrlTable from './UrlTable';
import BodyHeader from '../../components/BodyHeader';
import api from '../../services/api';

const { http } = api;

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

////////
const headers = [
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'enabled',
    header: 'Enabled',
  },
  {
    key: 'processing',
    header: 'Processing',
  },
  {
    key: 'last_change_datetime',
    header: 'Last Analyze',
  },
  {
    key: 'first_verify',
    header: 'Status',
  },
  {
    key: 'last_verify',
    header: 'Risky',
  },
  {
    key: 'risky',
    header: 'Language',
  },
];
/////////

export default class TryArgusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      found: false,
      added: false,
      rows: [],
      rawRows: [],
    };
  }

  handleUrls() {
    http.get(`urls`).then(response => {
      let { result } = response.data;
      if (result.length > 0) this.setState({ rawRows: [] });
      this.setState({ rawRows: [...result] });
      this.handleDataConvertion();
    });
  }

  handleDataConvertion() {
    let data = this.state.rawRows,
      count = 0,
      result = data.map(obj => {
        let first_verify = obj.first_verify ? obj.first_verify['$date'] : '',
          last_verify = obj.last_verify ? obj.last_verify['$date'] : '',
          last_changes = obj.last_verify ? obj.last_changes['$date'] : '',
          id = count;

        delete obj.first_verify;
        delete obj.last_verify;
        delete obj.last_changes;

        let newObj = {
          id,
          ...obj,
          first_verify,
          last_verify,
          last_changes,
        };

        ++count;
        console.log(newObj);
        return newObj;
      });
    this.setState({ rows: [] });
    this.setState({ rows: [...result] });
  }

  componentDidMount() {
    this.handleUrls();
  }
  _addUrl = e => {
    if (e.key === 'Enter') {
      http.post(`add_url`, { type: '', url: e.target.value }).then(response => {
        if (response.data.Status === true) {
          this.setState({ added: true });
        } else {
          this.setState({ added: false });
        }
      });
    }
  };

  _searchContent = e => {
    if (e.key === 'Enter') {
      http.post(`search`, { content: e.target.value }).then(response => {
        if (response.data.was_found === true) {
          this.setState({ found: true });
        } else {
          this.setState({ found: false });
        }
      });
    }
  };
  render() {
    return (
      <div className="bx--grid bx--grid--full-width tryargus-page">
        <BodyHeader name="Tools" />
        <div className="bx--row tryargus-page__r2">
          <div className="bx--col bx--no-gutter">
            <Tabs {...props.tabs} aria-label="Tab navigation">
              <Tab {...props.tab} label="ProxyIt">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-search__input">
                    {(() => {
                      if (this.state.added) {
                        return (
                          <InlineNotification
                            kind="info"
                            iconDescription="Close button"
                            subtitle={<span></span>}
                            title="Successfully added new URL."
                          />
                        );
                      } else {
                        return null;
                      }
                    })()}
                    <TextInput
                      labelText="Add URL:"
                      id="url-input"
                      onKeyDown={this._addUrl}
                    />
                    <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-data__content">
                      <UrlTable headers={headers} rows={this.state.rows} />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="SearchIt">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-search__input">
                    <TextInput
                      helperText=""
                      id="data-input"
                      labelText="Search data:"
                      placeholder="Search"
                      onKeyDown={this._searchContent}
                    />
                  </div>
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-data__content">
                    <h2 id="data-output">
                      {this.state.found ? 'Found!' : 'Not found.'}
                    </h2>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
