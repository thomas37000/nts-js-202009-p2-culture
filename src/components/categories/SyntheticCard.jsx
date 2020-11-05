import React from 'react';
import './SyntheticCard.css';
import PropTypes from 'prop-types';

const SyntheticCard = (props) => {
  const {
    heure_debut: heure,
    nom,
    rubrique,
    media_1: media,
    gratuit,
    lieu,
    lieu_tel: tel,
    lieu_quartier: quartier,
  } = props;
  return (
    <div className="Card">
      <div className="Horaire">
        <span>{heure}</span>
      </div>
      <img src={media} alt="évènement" />
      <div className="Information">
        <div className="Catégorie">
          <h4>{rubrique}</h4>
        </div>
        <div className="Name">
          <h4>{nom}</h4>
        </div>
        <div className="Lieu">
          <h4>
            <span>{lieu}</span>
          </h4>
        </div>
        <div className="Ville">
          <h4>{quartier}</h4>
        </div>
      </div>
      <div className="Price">
        <span>8 euros</span>
        <span>{gratuit}</span>
      </div>
      <div className="tel">tel : {tel}</div>
    </div>
  );
};

SyntheticCard.propTypes = {
  category: PropTypes.shape({
    records: PropTypes.string,
    fields: PropTypes.string,
  }).isRequired,
  nom: PropTypes.string.isRequired,
  rubrique: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  gratuit: PropTypes.string.isRequired,
  lieu_tel: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  lieu_quartier: PropTypes.string.isRequired,
};

export default SyntheticCard;
