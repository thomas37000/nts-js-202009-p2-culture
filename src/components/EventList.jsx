import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import EventItem from './EventItem';

const EVENTLIST = styled.div`
  ul {
    padding: 0;
    margin-top: 4rem;
  }

  li {
    display: flex;
    list-style: none;
    justify-content: center;
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
    // eslint-disable-next-line react/prop-types
    const { price } = this.props;
    // eslint-disable-next-line react/destructuring-assignment
    const date = this.props.date
      ? // eslint-disable-next-line react/destructuring-assignment
        this.props.date.toLocaleDateString().split('/').reverse().join('-')
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

EventList.propTypes = {
  date: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default EventList;
