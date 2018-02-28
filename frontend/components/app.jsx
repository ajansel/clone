import React from 'react';
import HomepageContainer from './homepage/homepage_container';
import { Route, Switch } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Welcome to Clone</h1>
    <Switch>
      <Route path="/" component={HomepageContainer} />
    </Switch>
  </div>
);

export default App;