import React, { Component } from 'react';
import {
  Tabs,
  Tab,
  FormGroup,
  TextInput,
  RadioButton,
  SkeletonText,
  ModalWrapper,
  InlineLoading,
  RadioButtonGroup,
  DataTableSkeleton,
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
      added: Boolean,
      error: Boolean,
      tableLoading: true,
      savingLoading: false,
      isSearching: false,
      url: String,
      name: String,
      rows: [],
      rawRows: [],
    };

    this._handleUrl = this._handleUrl.bind(this);
    this._handleName = this._handleName.bind(this);
    this._addUrl = this._addUrl.bind(this);
  }

  handleUrls() {
    http.get(`urls`).then(response => {
      let { result } = response.data;
      if (result.length > 0) this.setState({ rawRows: [] });
      this.setState({ rawRows: [...result] });
      this.handleDataConvertion();
      this.setState({ tableLoading: false });
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

  _handleUrl = e => {
    this.setState({ url: e.target.value });
  };
  _handleName = e => {
    this.setState({ name: e.target.value });
  };
  _addUrl() {
    this.setState({ savingLoading: true });
    http
      .post(`add_url`, { name: this.state.name, url: this.state.url }).then(response => {
        if (response.data.Status === 'success') {
          this.setState({ added: true });
          this.setState({ error: false });
        } else {
        this.setState({ error: true });
        this.setState({ added: false });
      }
      this.setState({ savingLoading: !this.state.savingLoading });
    });
  }

  _searchContent = e => {
    this.setState({ isSearching: true });
    if (e.key === 'Enter') {
      http.post(`search`, { content: e.target.value }).then(response => {
        if (response.data.was_found === true) {
          this.setState({ found: true });
        } else {
          this.setState({ found: false });
        }
        this.setState({ isSearching: !this.state.isSearching });
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
                  <div class="bx--offset-lg-14 bx--col-lg-2 bx--offset-md-6 bx--col-md-2 bx--offset-sm-2 bx--col-sm-2">
                    <ModalWrapper
                      buttonTriggerText="Add URL"
                      modalHeading="Insert new URL"
                      handleSubmit={this._addUrl}
                      hasScrollingContent
                      shouldCloseAfterSubmit>
                      {this.state.error === true ? (
                        <InlineNotification
                          kind="error"
                          iconDescription="describes the close button"
                          title="Error on saving URL. Please try again later."
                        />
                      ) : null}
                      {this.state.added === true ? (
                        <InlineNotification
                          kind="success"
                          iconDescription="describes the close button"
                          title="URL saved successfully!"
                        />
                      ) : null}
                      <TextInput
                        labelText="Name:"
                        id="name-input"
                        onChange={this._handleName}
                      />
                      <TextInput
                        labelText="URL:"
                        id="url-input"
                        onChange={this._handleUrl}
                      />
                      <br></br>
                      <FormGroup invalid={false} legendText="Analysis Type">
                        <RadioButtonGroup
                          defaultSelected="default-selected"
                          legend="Analysis Type"
                          name="radio-button-group"
                          valueSelected="default-selected">
                          <RadioButton
                            id="analysis-1"
                            labelText="Analysis 1"
                            value="standard"
                          />
                          <RadioButton
                            id="analysis-2"
                            labelText="Analysis 2"
                            value="default-selected"
                          />
                        </RadioButtonGroup>
                      </FormGroup>
                      {this.state.savingLoading ? (
                        <InlineLoading description="Saving..." />
                      ) : null}
                    </ModalWrapper>
                  </div>
                  <div className="bx--row">
                    <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-data__content">
                      {this.state.tableLoading ? (
                        <DataTableSkeleton
                          columnCount={5}
                          compact={false}
                          headers={headers}
                          rowCount={5}
                          zebra={false}
                        />
                      ) : (
                        <UrlTable headers={headers} rows={rows} />
                      )}
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab {...props.tab} label="SearchIt">
                <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                  <div className="bx--col-sm-4 bx--col-md-6 bx--col-lg-12 tryargus-search__input">
                    <TextInput
                      helperText=""
                      id="data-input"
                      labelText="Search data:"
                      placeholder="Search"
                      onKeyDown={this._searchContent}
                    />
                  </div>
                  <div className="bx--col-sm-4 bx--col-md-8 bx--col-lg-16 tryargus-data__content">
                    {this.state.isSearching ? (<SkeletonText
                        heading={false}
                        lineCount={3}
                        paragraph={false}
                        width="100%"
                      />) : (<h2 id="data-output">
                      {this.state.found ? 'Found!' : 'Not found.'}
                    </h2>)}
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
