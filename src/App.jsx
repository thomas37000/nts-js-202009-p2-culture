import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Grid from './components/Grid';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import Footer from './components/Footer';
import Filters from './components/filters/Filters';
import Contact from './components/Contact';
import Maps from './components/Maps';

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
            <Route path="/map" component={Maps} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <ScrollUpButton
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              // eslint-disable-next-line no-useless-concat
              backgroundColor: 'none',
            }}
          />
        </Router>
      </>
    );
  }
}
export default App;
