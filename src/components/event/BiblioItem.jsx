/* eslint-disable react/no-unused-state */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BIBLIOITEM from '../styledComponents/BiblioItemStyle';

class BiblioItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const {
      categorie_1: category,
      nom: name,
      media_1: media,
      date: eventdate,
      heure_debut: beginning,
      heure_fin: end,
      lieu: location,
      adresse: address,
      ville: city,
      gratuit: free,
      precisions_tarifs: price,
    } = this.props;
    return (
      <div>
        <BIBLIOITEM>
          <div className="SyntheticTimetable">
            <h3>{eventdate}</h3>
            <span className="horaire">
              {beginning} - {end}
            </span>
          </div>
          <img className="SyntheticPhoto" src={media} alt={name} />
          <div className="SyntheticInformation">
            <div className="SyntheticCategory">
              <h4>Catégorie : {category}</h4>
            </div>
            <div className="SyntheticName">
              <h4>{name}</h4>
            </div>
            <div className="SyntheticLocation">
              <h4>Lieu : {location}</h4>
            </div>
            <div className="SyntheticAddress">
              <h4>Adresse : {address}</h4>
              <h4>Ville : {city}</h4>
            </div>
          </div>
          <div className="SyntheticPrice">
            <h4>Tarif : {price}</h4>
            <span className="free">
              {free === 1 ? <strong>Gratuit</strong> : ''}
            </span>
          </div>
        </BIBLIOITEM>
      </div>
    );
  }
}

BiblioItem.propTypes = {
  active: PropTypes.bool.isRequired,
  id_manif: PropTypes.string.isRequired,
  categorie_1: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  heure_fin: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  adresse: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
};

export default BiblioItem;
