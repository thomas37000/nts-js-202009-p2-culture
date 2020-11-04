import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Grid from './components/Grid';
import DetailCard from './components/DetailCard';

import Filters from './components/filters/Filters';

import Navbar from './components/navBar/Navbar';

import Evenements from './components/categories/Evenements';
import Tarifs from './components/categories/Tarifs';
import Kids from './components/categories/Kids';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Grid />
            <Filters />
          </Route>
          <Route path="/spectacles/" component={Evenements} />
          <Route path="/tarifs/" component={Tarifs} />
          <Route path="/enfants/" component={Kids} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
