/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FIGURE from '../styledComponents/DetailEventStyle';

class DetailEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios
      .get(
        `https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&refine.recordid=${id}`
      )
      .then((response) => {
        this.setState({
          eventDetails: response.data.records[0].fields,
        });
        console.log(response);
      });
  }

  render() {
    const { eventDetails } = this.state;
    return (
      <FIGURE className="DetailCard">
        <section className="eventName">
          <h2>{eventDetails.libelle_festival}</h2>
          <h2>{eventDetails.nom}</h2>
        </section>
        <section className="Card">
          <img
            className="photo"
            src={eventDetails.media_1}
            alt={eventDetails.nom}
          />
          <div className="information">
            <h1 className="date">{eventDetails.date}</h1>
            <p className="description">
              <span className="colorTitle">Description :</span>{' '}
              {eventDetails.description}
            </p>
            <p className="accessibilité">
              <span className="colorTitle">Public :</span>{' '}
              {eventDetails.precisions_public !== undefined
                ? eventDetails.precisions_public
                : 'non précisé'}
            </p>
            <p className="lieu">
              <span className="colorTitle">Lieu :</span> {eventDetails.lieu}
            </p>
            <p>
              <span className="colorTitle">Horaire :</span>{' '}
              {eventDetails.heure_debut} - {eventDetails.heure_fin}
            </p>
            <p className="gratuité">
              <span className="colorTitle">Gratuité :</span>{' '}
              {eventDetails.gratuit}
            </p>
            <p className="price">
              <span className="colorTitle">Tarif :</span>{' '}
              {eventDetails.precisions_tarifs}
            </p>
          </div>
          <div className="location">
            <h3>
              <span className="colorTitle">Coordonnées :</span>
            </h3>
            <p>
              <span className="colorTitle">Adresse :</span>{' '}
              {eventDetails.adresse !== undefined
                ? eventDetails.adresse
                : 'non précisé'}
            </p>
            <p>
              <span className="colorTitle">Ville :</span> {eventDetails.ville}
            </p>
            <p>
              <span className="colorTitle">Tél. :</span>{' '}
              {eventDetails.lieu_tel !== undefined
                ? eventDetails.lieu_tel
                : 'non précisé'}
            </p>
            <p>
              <span className="colorTitle">Site Web :</span>{' '}
              <Link
                to={{ pathname: eventDetails.lieu_siteweb }}
                target="_blank"
              >
                {eventDetails.lieu_siteweb !== undefined
                  ? eventDetails.lieu_siteweb
                  : 'non précisé'}
              </Link>
            </p>
          </div>
        </section>
      </FIGURE>
    );
  }
}

DetailEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailEvent;
