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
    margin: 1rem;
    width: 10rem;
  }
`;

class EventListVoyageNantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventListVoyageNantes: [],
      date: this.props.date,
      category: 'Voyage à Nantes',
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

  /*
  componentDidUpdate() {
    const { date } = this.props;
    this.setState({ date: date });
    console.log('eventliste : ', date);
  }
*/

  fetchDatas() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
          apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 500,
        },
      })
      .then((response) => {
        this.setState({
          EventListVoyageNantes: response.data.records,
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
    const { EventListVoyageNantes, status } = this.state;

    return (
      <div className="EventList">
        <EVENTLIST>
          <button type="button" onClick={this.free}>
            Gratuit
          </button>
          <button type="button" onClick={this.paying}>
            moins de 50€
          </button>
          <button type="button" onClick={this.showAll}>
            Tous
          </button>
          <ul>
            {EventListVoyageNantes.filter((event) => {
              // eslint-disable-next-line no-console
              console.log(status);
              if (status === 'all') {
                return true;
              }
              if (status === 'paying') {
                return event.fields.gratuit === 'non';
              }
              return event.fields.gratuit === 'oui';
            }).map((event) => {
              return (
                <li key={event.fields.recordid}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <EventItem
                    {...event.fields}
                    libelle_festival="Voyage à Nantes"
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

export default EventListVoyageNantes;
