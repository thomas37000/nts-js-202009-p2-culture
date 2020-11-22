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

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
      choiceOfDate: new Date().toISOString().split('T')[0],
    };
    this.todayDate = this.todayDate.bind(this);
    this.tomorrowDate = this.tomorrowDate.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
          rows: 2000,
        },
      })
      .then((response) => {
        this.setState({
          EventList: response.data.records,
        });
      });
  }

  todayDate() {
    this.setState({
      choiceOfDate: new Date().toISOString().split('T')[0],
    });
  }

  tomorrowDate() {
    const Today = new Date();
    this.setState({
      choiceOfDate: new Date(Today.setDate(Today.getDate() + 1))
        .toISOString()
        .split('T')[0],
    });
  }

  handleChange(event) {
    this.setState({ choiceOfDate: event.target.value });
  }

  render() {
    const { EventList, choiceOfDate } = this.state;

    return (
      <div className="EventList">
        <EVENTLIST>
          <button type="button" onClick={this.todayDate}>
            Aujourd'hui
          </button>
          <button type="button" onClick={this.tomorrowDate}>
            Demain
          </button>
          <input
            type="text"
            placeholder="AAAA-MM-JJ"
            value={this.state.choiceOfDate}
            onChange={this.handleChange}
          />
          <ul>
            {EventList.filter((event) => {
              return event.fields.date === this.state.choiceOfDate;
            }).map((event) => {
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

export default EventList;
