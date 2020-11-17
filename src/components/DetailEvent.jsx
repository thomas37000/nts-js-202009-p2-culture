/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
      eventDetails: [],
    };
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const id = this.props.match.params.id_manif;
    axios
      .get('https://data.nantesmetropole.fr/api/records/${id}', {
        params: {
          dataset: '244400404_agenda-evenements-nantes-nantes-metropole',
          apikey: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 500,
        },
      })
      .then((response) => {
        this.setState({
          eventDetails: response.data.records,
        });
      });
  }

  render() {
    const { eventDetails } = this.state;
    return (
      <div>
        <FIGURE className="DetailCard">
          <img
            className="photo"
            src={eventDetails.media}
            alt={eventDetails.name}
          />
          <section className="eventName">
            <h1>{eventDetails.category}</h1>
            <h2>{eventDetails.name}</h2>
          </section>
          <section className="Card">
            <div className="information">
              <h1 className="date">{eventDetails.eventdate}</h1>
              <h4 className="description">Description :</h4>
              <h4 className="price">
                Tarif : <span>{eventDetails.price}</span>
              </h4>
              <h4 className="accessibilité">Accessiblité :</h4>
              <h4 className="gratuité">Gratuité : </h4>
              <h4 className="lieu">
                Lieu : <span>{eventDetails.location}</span>
              </h4>
              <h4>
                Horaire :{' '}
                <span>
                  {eventDetails.beginning} - {eventDetails.end}
                </span>
              </h4>
            </div>
            <div className="location">
              <div className="contact">
                <h3>Coordonnées :</h3>
                <p>{eventDetails.city}</p>
                <p>Tél. :</p>
                <p>email :</p>
              </div>
              <div className="map">
                <iframe src="https://google/maps/gfpwj2aMgwTsRtEy7" />
              </div>
            </div>
          </section>
          <div>
            <Link to="/">retour à l'accueil</Link>
          </div>
        </FIGURE>
      </div>
    );
  }
}

export default DetailEvent;
