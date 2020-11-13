/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-named-as-default
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

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
      date: this.props.date,
      status: 'all',
      activeId: '',
    };
    this.free = this.free.bind(this);
    this.paying = this.paying.bind(this);
    this.showAll = this.showAll.bind(this);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
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
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-animations-culturelles-bibliotheque-municipale-nantes&q=&facet=precisions_public&facet=accueil_enfant&facet=date&facet=complet&facet=annule&facet=reporte&facet=lieu&facet=gratuit'
      )
      .then((response) => {
        this.setState({
          EventList: response.data.records,
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

  handleChangeEvent(event) {
    const buttonId = event.target.id;
    this.setState({ activeId: buttonId });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { EventList, status, activeId } = this.state;

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
            {EventList.filter((event) => {
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
              console.log(event.fields);
              return (
                <li key={event.fields.id_manif}>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <EventItem
                    activeId={activeId}
                    handleChangeEvent={this.handleChangeEvent}
                    {...event.fields}
                  />
                  <button type="button">
                    <Link to={`/event-detail/${event.fields.id_manif}`}>
                      TEST
                    </Link>
                  </button>
                </li>
              );
            })}
          </ul>
        </EVENTLIST>
      </div>
    );
  }
}

export default EventList;
