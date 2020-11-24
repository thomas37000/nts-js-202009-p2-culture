import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import EventItem from './EventItem';

const EVENTLIST = styled.div`
  ul {
    padding: 0;
    margin: 2rem auto;
  }

  li {
    display: flex;
    list-style: none;
    justify-content: center;
  }
`;

class EventListVoyageNantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventListVoyageNantes: [],
    };
  }

  componentDidMount() {
    this.fetchDatas();
  }

  fetchDatas() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
          apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 2000,
        },
      })
      .then((response) => {
        this.setState({
          EventListVoyageNantes: response.data.records,
        });
      });
  }

  render() {
    const { EventListVoyageNantes: eventList } = this.state;

    const { price } = this.props;
    let { date } = this.props;

    date = date ? new Intl.DateTimeFormat('fr-ca').format(date) : null;
    return (
      <div className="EventListVoyageNantes">
        <EVENTLIST>
          <ul>
            {eventList
              .filter((event) => (date ? date === event.fields.date : true))
              .filter((event) => {
                if (price === '0') {
                  return (
                    event.fields.gratuit === 'oui' &&
                    event.fields.libelle_festival === 'Voyage à Nantes'
                  );
                }
                if (price === '1') {
                  return (
                    event.fields.gratuit === 'non' &&
                    event.fields.libelle_festival === 'Voyage à Nantes'
                  );
                }
                return (
                  true && event.fields.libelle_festival === 'Voyage à Nantes'
                );
              })
              .map((event) => {
                return (
                  <li>
                    <EventItem
                      key={event.fields.recordid}
                      {...event.fields}
                      recordid={event.recordid}
                    />
                  </li>
                );
              })}
          </ul>
        </EVENTLIST>
      </div>
    );
  }
}

EventListVoyageNantes.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default EventListVoyageNantes;

