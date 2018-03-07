import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import NavbarContainer from './navbar/navbar_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div className="main-container">
    <NavbarContainer />
    <Switch>
      <Route path="/" component={HomepageContainer} />
    </Switch>
  </div>
);

export default App;