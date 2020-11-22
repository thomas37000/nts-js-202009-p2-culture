/* eslint-disable react/prop-types */
/* eslint-disable no-alert */
/* eslint-disable react/sort-comp */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import EventItem from './EventItem';

const EVENTLIST = styled.div`
  ul {
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
    margin: 2rem;
    width: 10rem;
  }

  input {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin: 2rem;
    width: 10rem;
  }
`;

class EventListPatrimoine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventListPatrimoine: [],
      // eslint-disable-next-line react/no-unused-state
      status: 'all',
    };
    this.free = this.free.bind(this);
    this.paying = this.paying.bind(this);
    this.showAll = this.showAll.bind(this);
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
          EventListPatrimoine: response.data.records,
        });
      });
  }

  free() {
    this.setState({
      status: 'free',
    });
  }

  paying() {
    this.setState({
      status: 'paying',
    });
  }

  showAll() {
    this.setState({
      status: 'all',
    });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { EventListPatrimoine, status } = this.state;
    const date = this.props.date
      ? this.props.date.toLocaleDateString().split('/').reverse().join('-')
      : null;
    return (
      <div className="EventList">
        <EVENTLIST>
          <button type="button" onClick={this.free}>
            Gratuit
          </button>
          <button type="button" onClick={this.paying}>
            Payant
          </button>
          <button type="button" onClick={this.showAll}>
            Tous
          </button>
          <ul>
            {EventListPatrimoine.filter((event) => {
              // eslint-disable-next-line no-console
              if (status === 'all') {
                return (
                  event.fields.libelle_festival ===
                  'Journées du Patrimoine (19 et 20 septembre 2020)'
                );
              }
              if (status === 'paying') {
                return (
                  event.fields.gratuit === 'non' &&
                  event.fields.libelle_festival ===
                    'Journées du Patrimoine (19 et 20 septembre 2020)'
                );
              }
              return (
                event.fields.gratuit === 'oui' &&
                event.fields.libelle_festival ===
                  'Journées du Patrimoine (19 et 20 septembre 2020)'
              );
            })
              .filter((event) => (date ? date === event.fields.date : true))
              .map((event) => {
                return (
                  <li key={event.fields.recordid}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
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

export default EventListPatrimoine;