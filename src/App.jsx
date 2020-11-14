/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Filters from './components/filters/Filters';
import EventList from './components/EventList';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.dateUpdate = this.dateUpdate.bind(this);
  }

  dateUpdate(date) {
    this.setState({ date: date });
    console.log('app : ', date);
  }

  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Grid />
              <Filters dateUpdate={this.dateUpdate} />
              <EventList date={this.state.date} />
              <Footer />
            </Route>
            <Route exact path="/bibliotheques">
              <Navbar />
              <BiblioList />
              <Footer />
            </Route>
            <Route exact path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
