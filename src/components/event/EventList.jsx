import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventItem from './EventItem';
import EVENTLIST from '../styledComponents/EventListStyle';
import getApi from '../../api/api';

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventList: [],
    };
  }

  componentDidMount() {
    this.fetchDatas();
  }

  async fetchDatas() {
    await getApi((result) => {
      this.setState(
        {
          EventList: result,
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error);
        }
      );
    });
  }

  render() {
    const { EventList: eventList } = this.state;
    const { price } = this.props;
    let { date } = this.props;

    date = date ? new Intl.DateTimeFormat('fr-ca').format(date) : null;

    return (
      <EVENTLIST>
        <ul>
          {eventList
            .filter((event) => {
              return date ? date === event.fields.date : true;
            })
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
                <li key={event.recordid}>
                  <EventItem {...event.fields} recordid={event.recordid} />
                </li>
              );
            })}
        </ul>
      </EVENTLIST>
    );
  }
}

EventList.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
