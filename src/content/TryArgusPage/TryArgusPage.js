import React, { Component } from 'react';
import { Tabs, Tab, TextInput } from 'carbon-components-react';
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
    key: 'createdAt',
    header: 'Created',
  },
  {
    key: 'updatedAt',
    header: 'Updated',
  },
  {
    key: 'lastAnalysi',
    header: 'Last Analyze',
  },
  {
    key: 'processingNow',
    header: 'Status',
  },
  {
    key: 'risky',
    header: 'Risky',
  },
  {
    key: 'lang',
    header: 'Language',
  },
];
/////////

export default class TryArgusPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        {
          id: '1',
          name: 'GrookIT Page',
          createdAt: 'Date',
          updatedAt: 'Date',
          lastAnalysi: 'Date',
          processingNow: 'False',
          risky: '5',
          lang: 'it',
        },
        {
          id: '2',
          name: '4Channel',
          createdAt: 'Date',
          updatedAt: 'Date',
          lastAnalysi: 'Date',
          processingNow: 'True',
          risky: '8',
          lang: 'pt',
        },
        {
          id: '3',
          name: 'DkChannel',
          createdAt: 'Date',
          updatedAt: 'Date',
          lastAnalysi: 'Date',
          processingNow: 'True',
          risky: '10',
          lang: 'en',
        },
      ],
    };
  }

  handleUrls() {
    http.get(`urls/`).then(response => {
      if (response.data.length > 0) this.setState({ row: [] });
      this.setState({ rows: [...response.data] });
    });
  }

  componentDidMount() {
    this.handleUrls();
  }

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
                    <TextInput
                      labelText="Add URL:"
                      id="url-input"
                      placeholder="URL"
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
                    <TextInput.PasswordInput
                      helperText=""
                      hidepasswordlabel="Hide"
                      id="data-input"
                      labelText="Search data:"
                      placeholder="Search"
                      showpasswordlabel="Show"
                    />
                  </div>
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-data__content">
                    <h2 id="data-output">Founded!</h2>
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
