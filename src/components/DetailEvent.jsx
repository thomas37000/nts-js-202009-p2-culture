/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import EventItem from './EventItem';

const FIGURE = styled.figure`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  .eventName {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
  }
  .eventName h1 {
    margin: 0.5rem;
  }
  .eventName h2 {
    margin: 0.5rem;
  }
  .Card {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: auto;
    height: auto;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    background-color: rgb(245, 239, 239);
    border-radius: 2px;
    font-size: 0.75em;
  }
  .material-icons {
    font-family: 'Material Icons';
    font-size: 16px;
  }
  iframe {
    max-width: 90%;
    max-height: 90%;
    margin: 1rem;
  }
  .horaire {
    width: 3rem;
  }
  .photo {
    width: 100%;
    height: auto;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin-bottom: var(--section-margin);
  }
  .information,
  .location {
    margin: 0.5rem;
  }
  .price span {
    width: auto;
  }
  .location,
  .map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: auto;
  }
  @media screen and (min-width: 800px) {
    .photo {
      display: none;
    }
    .eventName {
      display: flex;
      justify-content: center;
      background-image: url('https://www.guide-tourisme-france.com/IMAGES/IMG2686.jpg');
      height: 60vh;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .eventName h1,
    .eventName h2 {
      font-size: 5rem;
      color: #f5f2f2;
      text-align: center;
      letter-spacing: 0.3rem;
      text-shadow: 3px 4px 8px #0e0d0d;
      width: 100%;
    }
    .Card {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      width: auto;
      height: auto;
      background-color: rgb(245, 239, 239);
      box-shadow: none;
      border-radius: none;
      font-size: 0.75em;
    }
    .information {
      margin: 2rem;
    }
    .price {
      width: auto;
    }
  }
`;

class DetailEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Event: [],
    };
    this.loadDetailEvent = this.loadDetailEvent.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { detailEventId } = this.props.match.params;
    this.loadDetailEvent(detailEventId);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { detailEventId },
      },
    } = this.props;
    const prevPostId = prevProps.match.params.detailEventId;
    if (prevPostId !== detailEventId) {
      this.loadDetailEvent(detailEventId);
    }
  }

  loadDetailEvent() {
    const {
      match: {
        params: { detailEventId },
      },
    } = this.props;
    const res = axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
          apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 10,
        },
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
        res.data.find((detail) => detail.id === detailEventId);
        this.setState({
          Event: response.data.records,
        });
      });

    // const result = res.find((detail) => detail.id === detailEventId);
    // this.setState({ result });
  }

  render() {
    // eslint-disable-next-line no-shadow
    const { Event } = this.state;

    return (
      <div>
        <button type="button">
          <Link to="/">Home</Link>
        </button>

        <FIGURE className="DetailCard">
          <EventItem {...Event} />
        </FIGURE>
      </div>
    );
  }
}

DetailEvent.propTypes = {
  id: PropTypes.string.isRequired,
  params: PropTypes.string.isRequired,
  match: PropTypes.string.isRequired,
};

export default DetailEvent;
