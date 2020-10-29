import React from 'react';
import './SyntheticCard.css';
import PropTypes from 'prop-types';
// import Category from './Category';

const SyntheticCard = (props) => {
  const {
    heure_debut: heure,
    nom,
    description,
    media_1: media,
    gratuit,
    lieu,
    lieu_tel: tel,
    lieu_quartier: quartier,
  } = props;
  return (
    <figure className="Card">
      <div className="horaire">
        <span>{heure}</span>
      </div>
      <img src={media} alt={nom} />
      <div className="information">
        <h3 className="catégorie">
          <span>Exposition : </span>
          <span>{nom}</span>
        </h3>
        <h4 className="lieu">
          <span>Lieu : </span>
          <span>{lieu}</span>
        </h4>
        <p>
          <span>quartier : </span>
          {quartier}
        </p>
        <h4 className="description">
          <span>Description : </span>
          <span>{description}</span>
        </h4>
        <h6>{tel}</h6>
      </div>
      <div className="price">
        <span>8 euros</span>
      </div>
      <div className="price">
        gratuit:
        {gratuit}
      </div>
    </figure>
  );
};

SyntheticCard.propTypes = {
  category: PropTypes.shape({
    records: PropTypes.string,
    fields: PropTypes.string,
  }).isRequired,
  nom: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
  lieu_tel: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  lieu_quartier: PropTypes.string.isRequired,
};

export default SyntheticCard;
