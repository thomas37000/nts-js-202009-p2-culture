import React from 'react';
import PropTypes from 'prop-types';

const Expos = (props) => {
  const { heure_debut: heure, nom, description, media_1: media } = props;
  return (
    <div id="Expos">
      <h1>{nom}</h1>
      <p>
        <strong>{description}</strong>
      </p>
      <p>
        <strong>{heure}</strong>
      </p>
      <img src={media} alt={description} />
    </div>
  );
};

Expos.propTypes = {
  category: PropTypes.shape({
    records: PropTypes.string,
    fields: PropTypes.string,
  }).isRequired,
  nom: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.bool.isRequired,
};

export default Expos;
