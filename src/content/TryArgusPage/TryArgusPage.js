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
    key: 'processing',
    header: 'Processing',
  },
  {
    key: 'lastChange',
    header: 'Last Changes',
  },
  {
    key: 'creationDate',
    header: 'Creation Date',
  },
  {
    key: 'lastAttpemt',
    header: 'Last Scan',
  },
  {
    key: 'risky',
    header: 'Risky',
  },
  {
    key: 'language',
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
    let convertDate = date => new Date(date).toLocaleTimeString();
    let convertProccess = bool => (bool ? 'Yes' : 'No');

    let data = this.state.rawRows,
      count = 0,
      result = data.map(obj => {
        let first_verify = obj.first_verify
            ? convertDate(obj.first_verify)
            : '',
          last_verify = obj.last_verify ? convertDate(obj.last_verify) : '',
          last_changes = obj.last_verify ? convertDate(obj.last_changes) : '',
          processing = obj.processing ? convertProccess(obj.processing) : 'No',
          analysis = obj.analysis ? true : false,
          id = count;

        delete obj.first_verify;
        delete obj.last_verify;
        delete obj.last_changes;
        delete obj.processing;

        let newObj = {
          id,
          processing,
          ...obj,
          analysis,
          first_verify,
          last_verify,
          last_changes,
        };

        ++count;
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
    const { rows } = this.state;
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
                            subtitle={<span />}
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
                      <UrlTable headers={headers} rows={rows} />
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
