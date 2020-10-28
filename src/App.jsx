import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Grid from './components/Grid';
import FilterCategory from './components/FilterCategory';

function App() {
  // return (
  //   <div className="App">
  //     <Grid />
  //     <FilterCategory />
  //   </div>
  // );

  return (
    <Router>
      <div>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/evenement/">Evenement</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/">
            <Grid />
          </Route>
          <Route path="/evenement" component={FilterCategory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
