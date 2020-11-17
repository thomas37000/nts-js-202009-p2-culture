/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DetailEventCard from './DetailEventCard';

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
      Detail: [],
    };
    // this.getEventAnimation = this.getEventAnimation.bind(this);
  }

  // componentDidMount() {
  //   this.getEventAnimation();
  // }

  // getEventAnimation() {
  //   const { id } = this.props.match.params;
  //   axios
  //     .get(
  //       `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-animations-culturelles-bibliotheque-municipale-nantes&q=&facet=precisions_public&facet=accueil_enfant&facet=date&facet=complet&facet=annule&facet=reporte&facet=lieu&facet=gratuit${id}`
  //     )
  //     .then((res) => this.setState({ Detail: res.data }));
  // }

  render() {
    const { Detail } = this.state;

    return (
      <div>
        <FIGURE className="DetailCard">
          <DetailEventCard />;
        </FIGURE>
      </div>
    );
  }
}
DetailEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  }),
  description: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
  lieu_siteweb: PropTypes.string.isRequired,
  lieu_tel: PropTypes.bool.isRequired,
  id_manif: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  heure_fin: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string.isRequired,
};

export default DetailEvent;
