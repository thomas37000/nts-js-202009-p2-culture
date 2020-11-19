import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Filters from './components/filters/Filters';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      price: '2',
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
          <Switch>
            <Route exact path="/">
              <Navbar />
              <Grid />
              <Filters
                dateUpdate={this.dateUpdate}
                priceUpdate={this.priceUpdate}
              />
              <EventList date={this.state.date} price={this.state.price} />
              <Footer />
            </Route>
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
