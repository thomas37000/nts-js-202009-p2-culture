/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BiblioItem from './BiblioItem';
import Clock from './Clock';

const BIBLIOLIST = styled.div`
  .category {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  li {
    list-style: none;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 1rem;
    width: 8rem;
  }
`;

class BiblioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BiblioList: [],
      // eslint-disable-next-line react/no-unused-state
      status: null,
    };
    this.children = this.children.bind(this);
    this.reading = this.reading.bind(this);
    this.workshop = this.workshop.bind(this);
    this.activitytoshare = this.activitytoshare.bind(this);
    this.exhibition = this.exhibition.bind(this);
    this.theater = this.theater.bind(this);
    this.game = this.game.bind(this);
    this.visit = this.visit.bind(this);
    this.film = this.film.bind(this);
    this.conference = this.conference.bind(this);
    this.meeting = this.meeting.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset:
            '244400404_agenda-animations-culturelles-bibliotheque-municipale-nantes',
          apikey: '9c8592e7df939aca9533c5abc85d0600cb3eafa8e8e40a73e9114648',
          rows: 500,
        },
      })
      .then((response) => {
        this.setState({
          BiblioList: response.data.records,
        });
      });
  }

  children() {
    this.setState({
      status: 'children',
    });
  }

  reading() {
    this.setState({
      status: 'reading',
    });
  }

  workshop() {
    this.setState({
      status: 'workshop',
    });
  }

  activitytoshare() {
    this.setState({
      status: 'activitytoshare',
    });
  }

  exhibition() {
    this.setState({
      status: 'exhibition',
    });
  }

  theater() {
    this.setState({
      status: 'theater',
    });
  }

  game() {
    this.setState({
      status: 'game',
    });
  }

  visit() {
    this.setState({
      status: 'visit',
    });
  }

  film() {
    this.setState({
      status: 'film',
    });
  }

  conference() {
    this.setState({
      status: 'conference',
    });
  }

  meeting() {
    this.setState({
      status: 'meeting',
    });
  }

  showAll() {
    this.setState({
      status: 'all',
    });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { BiblioList, status } = this.state;
    return (
      <div className="EventList">
        <BIBLIOLIST>
        <div className="title">
            <h1>Agenda des animations culturelles de la Bibliothèque Municipale de la ville de Nantes</h1>
            <Clock />
        </div>
          <div className="category">
            <button type="button" onClick={this.children}>
              Enfant
            </button>
            <button type="button" onClick={this.reading}>
              Lecture
            </button>
            <button type="button" onClick={this.workshop}>
              Atelier
            </button>
            <button type="button" onClick={this.activitytoshare}>
              Activité à partager
            </button>
            <button type="button" onClick={this.exhibition}>
              Expositions
            </button>
            <button type="button" onClick={this.theater}>
              Théatre
            </button>
            <button type="button" onClick={this.game}>
              Jeu
            </button>
            <button type="button" onClick={this.visit}>
              Visite
            </button>
            <button type="button" onClick={this.film}>
              Film / Projection
            </button>
            <button type="button" onClick={this.conference}>
              Conférence
            </button>
            <button type="button" onClick={this.meeting}>
              Rencontre
            </button>
            <button type="button" onClick={this.showAll}>
              Tous
            </button>
          </div>
          <ul>
            {BiblioList.filter((event) => {
              // eslint-disable-next-line no-console
              console.log(status);
              if (status === 'all') {
                return true;
              }
              if (status === 'children') {
                return event.fields.categorie_1 === 'Enfant';
              }
              if (status === 'reading') {
                return event.fields.categorie_1 === 'Lecture';
              }
              if (status === 'workshop') {
                return event.fields.categorie_1 === 'Atelier';
              }
              if (status === 'activitytoshare') {
                return event.fields.categorie_1 === 'Activité à partager';
              }
              if (status === 'exhibition') {
                return event.fields.categorie_1 === 'Expositions';
              }
              if (status === 'theater') {
                return event.fields.categorie_1 === 'Théatre';
              }
              if (status === 'game') {
                return event.fields.categorie_1 === 'Jeu';
              }
              if (status === 'visit') {
                return event.fields.categorie_1 === 'Visite';
              }
              if (status === 'film') {
                return event.fields.categorie_1 === 'Film / Projection';
              }
              if (status === 'conference') {
                return event.fields.categorie_1 === 'Conférence';
              }
              if (status === 'meeting') {
                return event.fields.categorie_1 === 'Rencontre';
              }
              return event.fields.categorie_1 === 'oui';
            }).map((event) => {
              return (
                <li key={event.fields.recordid}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <BiblioItem {...event.fields} />
                </li>
              );
            })}
          </ul>
        </BIBLIOLIST>
      </div>
    );
  }
}

export default BiblioList;
