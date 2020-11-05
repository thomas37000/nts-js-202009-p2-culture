import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from './components/Grid';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
