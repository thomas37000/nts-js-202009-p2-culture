import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route exact path="/bibliotheques">
            <Navbar />
            <BiblioList />
            <Footer />
          </Route>
          <Route exact path="/bibliotheques">
            <Navbar />
            <BiblioList />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
