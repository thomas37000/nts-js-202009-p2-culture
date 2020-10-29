import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Grid from './components/Grid';
import Expositions from './components/categories/Expositions';
import TarifCategory from './components/categories/Tarifs';
// import Kids from './components/categories/Kids';

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
          <Nav.Item componentclass="span">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentclass="span">
            <Nav.Link>
              <Link to="/expositions/">Expositions</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentclass="span">
            <Nav.Link>
              <Link to="/tarifs/">Tarifs</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentclass="span">
            <Nav.Link>
              <Link to="/enfants/">Enfants / jeunesse</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item componentClass="span">
            <Nav.Link>
              <Link to="/contact/">Contact</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Switch>
          <Route exact path="/">
            <Grid />
          </Route>
          <Route path="/expositions" component={Expositions} />
          <Route path="/tarifs" component={TarifCategory} />
          {/* <Route path="/enfants" component={Kids} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
