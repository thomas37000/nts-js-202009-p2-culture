/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Navbar from './components/BurgerMenu/Navbar';
import Scrolltxt from './components/Scrolltxt';
import Grid from './components/Grid';
import Filters from './components/filters/Filters';
import EventList from './components/Event/EventList';
import RouteEventList from './components/Event/RouterEventList';
import DetailEvent from './components/Event/DetailEvent';
import Footer from './components/Footer';

const SELECTION = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
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
              <Scrolltxt />
              <Grid />
              <SELECTION>
                <Filters
                  dateUpdate={this.dateUpdate}
                  priceUpdate={this.priceUpdate}
                />
                <EventList date={this.state.date} price={this.state.price} />
              </SELECTION>
            </Route>
            <RouteEventList />
            <Route exact path="/event/:id" component={DetailEvent} />
          </Switch>
          <Footer />
          <ScrollUpButton
            style={{
              backgroundColor: 'none',
              width: '40px',
              height: '40px',
              outline: 'none',
              transform: 'translateY(-3rem) translateX(1.5rem)',
            }}
          />
        </Router>
      </>
    );
  }
}

export default App;
