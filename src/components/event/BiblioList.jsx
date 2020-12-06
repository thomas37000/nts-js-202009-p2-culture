/* eslint-disable no-shadow */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-undef */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import axios from 'axios';
import BiblioItem from './BiblioItem';
import BIBLIOLIST from '../styledComponents/BiblioListStyle';

class BiblioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BiblioList: [],
      // eslint-disable-next-line react/no-unused-state
      category: 'all',
      choiceOfDate: 'all',
    };
    this.todayDate = this.todayDate.bind(this);
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
          rows: 300,
        },
      })
      .then((response) => {
        this.setState({
          BiblioList: response.data.records,
        });
      });
  }

  todayDate() {
    this.setState({
      choiceOfDate: new Date().toISOString().split('T')[0],
    });
  }

  children() {
    this.setState({
      category: 'Enfant',
    });
  }

  reading() {
    this.setState({
      category: 'Lecture',
    });
  }

  workshop() {
    this.setState({
      category: 'Atelier',
    });
  }

  activitytoshare() {
    this.setState({
      category: 'Activité à partager',
    });
  }

  exhibition() {
    this.setState({
      category: 'Expositions',
    });
  }

  theater() {
    this.setState({
      category: 'Théatre',
    });
  }

  game() {
    this.setState({
      category: 'Jeu',
    });
  }

  visit() {
    this.setState({
      category: 'Visite',
    });
  }

  film() {
    this.setState({
      category: 'Film / Projection',
    });
  }

  conference() {
    this.setState({
      category: 'Conférence',
    });
  }

  meeting() {
    this.setState({
      category: 'Rencontre',
    });
  }

  showAll() {
    this.setState({
      category: '',
    });
  }

  render() {
    const { BiblioList } = this.state;
    return (
      <div className="EventList">
        <BIBLIOLIST>
          <div className="today">
            <button type="button" onClick={this.todayDate}>
              Aujourd'hui
            </button>
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
              // eslint-disable-next-line react/destructuring-assignment
              return (
                event.fields.categorie_1 === this.state.category &&
                event.fields.date === this.state.choiceOfDate
              );
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
