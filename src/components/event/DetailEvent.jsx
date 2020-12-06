/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FIGURE from '../styledComponents/DetailEventStyle';
import getEventById from '../../api/apiById';

class DetailEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventDetails: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    getEventById(id, (result) => {
      this.setState(
        {
          eventDetails: result,
        },
        (error) => {
          console.error(error);
        }
      );
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
