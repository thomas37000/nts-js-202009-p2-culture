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
import EventListAllYear from './components/EventListAllYear';
import EventListVoyageNantes from './components/EventListVoyageNantes';
import EventListEstivales from './components/EventListEstivales';
import EventListPatrimoine from './components/EventListPatrimoine';
import BiblioList from './components/BiblioList';
import Footer from './components/Footer';
import Contact from './components/Contact';
import DetailEvent from './components/DetailEvent';

const H1 = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin: 2rem;
  color: #000080;
  text-shadow: 0 -1px 4px #fff, 0 -2px 10px #ff0, 0 -10px 20px #49ff18,
    0 -18px 40px #f00;
`;

const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SELECTION = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

const SPAN = styled.span`
  display: flex;
  font-size: 1rem;
  margin: 1rem;
  justify-content: left;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      price: 2,
    };
    this.dateUpdate = this.dateUpdate.bind(this);
    this.priceUpdate = this.priceUpdate.bind(this);
  }

  dateUpdate(date) {
    this.setState({ date });
  }

  priceUpdate(price) {
    this.setState({ price });
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Grid />
              <SELECTION>
                <Filters
                  dateUpdate={this.dateUpdate}
                  priceUpdate={this.priceUpdate}
                />
                <EventList date={this.state.date} price={this.state.price} />
              </SELECTION>
              <ScrollUpButton
                style={{
                  backgroundColor: 'none',
                  width: '40px',
                  height: '40px',
                  outline: 'none',
                  transform: 'translateY(-3rem) translateX(1.5rem)',
                  borderRadius: '5px',
                  boxShadow: '#ffffff 3px 3px 5px',
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
            <Route exact path="/diversite">
              <CATEGORY>
                <Link to="/voyage">
                  <SPAN>Voyage à Nantes</SPAN>
                </Link>
                <Link to="/animations">
                  <SPAN>Animations estivales</SPAN>
                </Link>
                <Link to="/patrimoine">
                  <SPAN>Journées du patrimoine</SPAN>
                </Link>
              </CATEGORY>
              <H1>Evènements tout au long de l'année</H1>
              <SELECTION>
                <Filters
                  dateUpdate={this.dateUpdate}
                  priceUpdate={this.priceUpdate}
                />
                <EventListAllYear
                  date={this.state.date}
                  price={this.state.price}
                />
              </SELECTION>
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
              <EventListVoyageNantes date={this.state.date} />
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
            <Route exact path="/animations">
              <CATEGORY>
                <Link to="/diversite">
                  <SPAN>Toute l'année</SPAN>
                </Link>
                <Link to="/voyage">
                  <SPAN>Voyage à Nantes</SPAN>
                </Link>
                <Link to="/patrimoine">
                  <SPAN>Journées du patrimoine</SPAN>
                </Link>
              </CATEGORY>
              <H1>Animations estivales</H1>
              <Filters dateUpdate={this.dateUpdate} />
              <EventListEstivales date={this.state.date} />
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
            <Route exact path="/patrimoine">
              <CATEGORY>
                <Link to="/voyage">
                  <SPAN>Voyage à Nantes</SPAN>
                </Link>
                <Link to="/animations">
                  <SPAN>Animations estivales</SPAN>
                </Link>
                <Link to="/diversite">
                  <SPAN>Toute l'année</SPAN>
                </Link>
              </CATEGORY>
              <H1>Journées du Patrimoine</H1>
              <Filters dateUpdate={this.dateUpdate} />
              <EventListPatrimoine date={this.state.date} />
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
