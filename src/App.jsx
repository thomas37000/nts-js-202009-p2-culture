import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import EventList from './components/EventList';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Grid />
            <EventList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
