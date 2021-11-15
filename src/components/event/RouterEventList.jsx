import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Filters from '../filters/Filters';
import EventListAllYear from './EventListAllYear';
// import EventListVoyageNantes from './EventListVoyageNantes';
// import EventListEstivales from './EventListEstivales';
import BiblioList from './BiblioList';
import Contact from '../contact/Contact';
import DIV from '../styledComponents/RouterEventListStyle';

class RouteEventList extends Component {
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
    const { date, price } = this.state;
    return (
      <DIV>
        <Route exact path="/bibliotheques">
          <h2 className="titleRouter">
            Animations culturelles des bibliothèques et médiathèques de Nantes
          </h2>
          <BiblioList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/diversite">
          <h2 className="titleRouter">
            Evènements tout au long de l&apos;année
          </h2>
          <div className="selection">
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListAllYear date={date} price={price} />
          </div>
        </Route>
      </DIV>
    );
  }
}

export default RouteEventList;
