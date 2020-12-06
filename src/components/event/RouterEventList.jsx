import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Filters from '../filters/Filters';
import EventListAllYear from './EventListAllYear';
import EventListVoyageNantes from './EventListVoyageNantes';
import EventListEstivales from './EventListEstivales';
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
          {/* <div className="category">
            <Link to="/voyage">
              <span className="spanRouter">Voyage à Nantes</span>
            </Link>
            <Link to="/animations">
              <span className="spanRouter">Animations estivales</span>
            </Link>
          </div> */}
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
        <Route exact path="/voyage">
          {/* <div className="category">
            <Link to="/diversite">
              <span className="spanRouter">Toute l&apos;année</span>
            </Link>
            <Link to="/animations">
              <span className="spanRouter">Animations estivales</span>
            </Link>
          </div> */}
          <h2 className="titleRouter">Evènements du Voyage à Nantes</h2>
          <div className="selection">
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListVoyageNantes date={date} price={price} />
          </div>
        </Route>
        <Route exact path="/animations">
          {/* <div className="category">
            <Link to="/diversite">
              <span className="spanRouter">Toute l&apos;année</span>
            </Link>
            <Link to="/voyage">
              <span className="spanRouter">Voyage à Nantes</span>
            </Link>
          </div> */}
          <h2 className="titleRouter">Animations estivales</h2>
          <div className="selection">
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListEstivales date={date} price={price} />
          </div>
        </Route>
      </DIV>
    );
  }
}

export default RouteEventList;
