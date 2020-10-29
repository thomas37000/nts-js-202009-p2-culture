import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Grid from './components/Grid';
import FilterCategory from './components/categories/FilterCategory';
import TarifCategory from './components/categories/Tarifs';
// import Kids from './components/Kids';

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
          <Nav.Item>
            <Nav.Link>
              <Link to="/tarifs/">Tarifs</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/enfants/">Enfants / jeunesse</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/">
            <Grid />
          </Route>
          <Route path="/evenement" component={FilterCategory} />
          <Route path="/tarifs" component={TarifCategory} />
          {/* <Route path="/enfants" component={Kids} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
