/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Filters from './components/filters/Filters';
import EventList from './components/EventList';
import EventListVoyageNantes from './components/EventListVoyageNantes';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';
import Contact from './components/Contact';

const H1 = styled.h1`
  font-size: 1rem;
  margin: 2rem;
`;

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
            <Route exact path="/voyage">
              <Navbar />
              <H1>Evènements du Voyage à Nantes</H1>
              <EventListVoyageNantes />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
