import React from 'react';
import BodyHeader from '../../components/BodyHeader';
import { Tabs, Tab } from 'carbon-components-react';

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

const DashPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width admin-page">
      <BodyHeader name="Admin" />
      <div className="bx--row admin-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="News">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width" />
            </Tab>
            <Tab {...props.tab} label="Business">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width" />
            </Tab>
            <Tab {...props.tab} label="Performance">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width" />
            </Tab>
            <Tab {...props.tab} label="Users">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width" />
            </Tab>
            <Tab {...props.tab} label="Control Painel">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width" />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default DashPage;
