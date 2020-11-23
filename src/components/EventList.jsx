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
    display: flex;
    list-style: none;
    justify-content: center;
  }

  .button-filter-price {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin: 1rem;
    width: 5rem;
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

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
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
          EventList: response.data.records,
        });
      });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { EventList } = this.state;
    const price = this.props.price;
    console.log(price);
    const date = this.props.date
      ? this.props.date.toLocaleDateString().split('/').reverse().join('-')
      : null;
    return (
      <div className="EventList">
        <EVENTLIST>
          <ul>
            {EventList.filter((event) =>
              date ? date === event.fields.date : true
            )
              .filter((event) => {
                if (price === '0') {
                  return event.fields.gratuit === 'oui';
                }
                if (price === '1') {
                  return event.fields.gratuit === 'non';
                }
                return true;
              })
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

export default EventList;
