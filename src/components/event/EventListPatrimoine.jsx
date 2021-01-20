import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import EventItem from './EventItem';
import EVENTLIST from '../styledComponents/EventListStyle';

export default class EventListVoyagePatrimoine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventListVoyagePatrimoine: [],
    };
  }

  componentDidMount() {
    this.fetchDatas();
  }

  async fetchDatas() {
    await axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
          apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 2000,
        },
      })
      .then((response) => {
        this.setState({
          EventListVoyagePatrimoine: response.data.records,
        });
      });
  }

  render() {
    const { EventListVoyagePatrimoine: eventList } = this.state;

    const { price } = this.props;
    let { date } = this.props;

    date = date ? new Intl.DateTimeFormat('fr-ca').format(date) : null;
    return (
      <div className="EventListVoyagePatrimoine">
        <EVENTLIST>
          <ul>
            {eventList
              .filter((event) => (date ? date === event.fields.date : true))
              .filter((event) => {
                if (price === '0') {
                  return (
                    event.fields.gratuit === 'oui' &&
                    event.fields.libelle_festival ===
                      'Journées du Patrimoine (19 et 20 septembre 2020)'
                  );
                }
                if (price === '1') {
                  return (
                    event.fields.gratuit === 'non' &&
                    event.fields.libelle_festival ===
                      'Journées du Patrimoine (19 et 20 septembre 2020)'
                  );
                }
                return (
                  true &&
                  event.fields.libelle_festival ===
                    'Journées du Patrimoine (19 et 20 septembre 2020)'
                );
              })
              .map((event) => {
                return (
                  <li key={event.recordid}>
                    <EventItem {...event.fields} recordid={event.recordid} />
                  </li>
                );
              })}
          </ul>
        </EVENTLIST>
      </div>
    );
  }
}

EventListVoyagePatrimoine.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
