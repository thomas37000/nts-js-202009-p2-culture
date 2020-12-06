import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Filters from '../filters/Filters';
import EventListAllYear from './EventListAllYear';
import EventListVoyageNantes from './EventListVoyageNantes';
import EventListEstivales from './EventListEstivales';
import BiblioList from './BiblioList';
import Contact from '../contact/Contact';

const H1 = styled.h1`
  font-size: 2rem;
  color: #7bf976;
  padding-bottom: 40px;
  padding-top: 20px;
  text-align: center;
  letter-spacing: 0.3rem;
`;

const CATEGORY = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const SELECTION = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const SPAN = styled.span`
  display: flex;
  font-size: 1rem;
  margin: 1rem;
  justify-content: left;
  border-radius: 4px;
  text-decoration: none;
`;

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
      <>
        <Route exact path="/bibliotheques">
          <H1>
            Animations culturelles des bibliothèques et médiathèques de Nantes
          </H1>
          <BiblioList />
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
          </CATEGORY>
          <H1>Evènements tout au long de l&apos;année</H1>
          <SELECTION>
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListAllYear date={date} price={price} />
          </SELECTION>
        </Route>
        <Route exact path="/voyage">
          <CATEGORY>
            <Link to="/diversite">
              <SPAN>Toute l&apos;année</SPAN>
            </Link>
            <Link to="/animations">
              <SPAN>Animations estivales</SPAN>
            </Link>
          </CATEGORY>
          <H1>Evènements du Voyage à Nantes</H1>
          <SELECTION>
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListVoyageNantes date={date} price={price} />
          </SELECTION>
        </Route>
        <Route exact path="/animations">
          <CATEGORY>
            <Link to="/diversite">
              <SPAN>Toute l&apos;année</SPAN>
            </Link>
            <Link to="/voyage">
              <SPAN>Voyage à Nantes</SPAN>
            </Link>
          </CATEGORY>
          <H1>Animations estivales</H1>
          <SELECTION>
            <Filters
              dateUpdate={this.dateUpdate}
              priceUpdate={this.priceUpdate}
            />
            <EventListEstivales date={date} price={price} />
          </SELECTION>
        </Route>
      </>
    );
  }
}

export default RouteEventList;
