/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable object-shorthand */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import Filters from './components/filters/Filters';
import EventList from './components/EventList';
import EventListVoyageNantes from './components/EventListVoyageNantes';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import DetailEvent from './components/DetailEvent';

const H1 = styled.h1`
  font-size: 1rem;
  margin: 2rem;
`;

const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;

const SPAN = styled.span`
  display: flex;
  font-size: 0.75rem;
  margin: 2rem;
  justify-content: left;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
    this.dateUpdate = this.dateUpdate.bind(this);
  }

  dateUpdate(date) {
    this.setState({ date });
    console.log('app : ', date);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Grid />
              <Filters dateUpdate={this.dateUpdate} />
              <EventList date={this.state.date} />
              <ScrollUpButton
                style={{
                  backgroundColor: 'none',
                  width: '40px',
                  height: '40px',
                  outline: 'none',
                  transform: 'translateY(-3rem) translateX(1.5rem)',
                }}
              />
            </Route>
            <Route exact path="/bibliotheques">
              <BiblioList />
              <ScrollUpButton
                style={{
                  backgroundColor: 'none',
                  width: '40px',
                  height: '40px',
                  outline: 'none',
                  transform: 'translateY(-3rem) translateX(1.5rem)',
                }}
              />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/voyage">
              <CATEGORY>
                <Link to="/diversite">
                  <SPAN>Toute l'année</SPAN>
                </Link>
                <Link to="/animations">
                  <SPAN>Animations estivales</SPAN>
                </Link>
                <Link to="/patrimoine">
                  <SPAN>Journées du patrimoine</SPAN>
                </Link>
              </CATEGORY>
              <H1>Evènements du Voyage à Nantes</H1>
              <Filters dateUpdate={this.dateUpdate} />
              <EventListVoyageNantes />
              <ScrollUpButton
                style={{
                  backgroundColor: 'none',
                  width: '40px',
                  height: '40px',
                  outline: 'none',
                  transform: 'translateY(-3rem) translateX(1.5rem)',
                }}
              />
            </Route>
            <Route exact path="/event/:id" component={DetailEvent} />
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
