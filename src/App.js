import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import ArgusHeader from './components/ArgusHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import ArgusOnDwPage from './content/ArgusOnDwPage';
import TryArgusPage from './content/TryArgusPage';
import AdminArea from './content/AdminArea';

class App extends Component {
  render() {
    return (
      <>
        <ArgusHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/argusondw" component={ArgusOnDwPage} />
            <Route path="/tryargus" component={TryArgusPage} />
            <Route path="/admin" component={AdminArea} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
