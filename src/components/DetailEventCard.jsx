import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Maps from './Maps';

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
    background-image: url('');
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
class DetailEventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Detail: [],
    };
  }

  render() {
    const {
      nom: name,
      media_1: media,
      // date: eventdate,
      heure_debut: beginning,
      // heure_fin: end,
      lieu: location,
      // ville: city,
      precisions_tarifs: price,
      lieu_tel: tel,
      lieu_siteweb: internet,
      description,
      gratuit,
    } = this.props;

    return (
      <div>
        <FIGURE className="DetailCard">
          <img className="photo" src={media} alt={name} />
          <section className="eventName">
            <h1>Exposition :{name}</h1>
            <h2>{name}</h2>
          </section>
          <section className="Card">
            <div className="information">
              <h1 className="date">20/10/2020</h1>
              <h4 className="description">
                Description :{description}
                <span>{description}</span>
              </h4>
              <h4 className="price">
                Tarif : <span>{price}</span>
              </h4>
              <h4 className="accessibilité">
                Accessiblité : <i className="material-icons">accessible</i>
                <i className="material-icons">hearing_disabled</i>
                <i className="material-icons">child_friendly</i>
              </h4>
              <h4 className="gratuité">
                Gratuité : <span>{gratuit}</span>
              </h4>
              <h4 className="lieu">
                Lieu : <span>{location}</span>
              </h4>
              <h4>
                Horaire : <span>{beginning}</span>
              </h4>
            </div>
            <div className="location">
              <div className="contact">
                <h3>Coordonnées :</h3>
                <p>{internet}</p>
                <p>
                  <i className="material-icons">perm_phone_msg</i>
                  <a className="contactLinks" href="tel:+33240415500">
                    {tel}
                  </a>
                </p>
                <p>
                  <i className="material-icons">email </i>
                  <a className="contactLinks" href="mailto:contact@museum.com">
                    contact@museum.com
                  </a>
                </p>
              </div>
              <div className="map">
                {/* <Maps {...location} /> */}
              </div>
            </div>
          </section>
        </FIGURE>
      </div>
    );
  }
}
DetailEventCard.propTypes = {
  description: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
  lieu_siteweb: PropTypes.string.isRequired,
  lieu_tel: PropTypes.bool.isRequired,
  id_manif: PropTypes.number.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  heure_fin: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string.isRequired,
};

export default DetailEventCard;
