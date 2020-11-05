import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Grid from './components/Grid';
import Navbar from './components/Navbar';
import Filters from './components/filters/Filters';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Grid />
            <Filters />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
