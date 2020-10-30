import React from 'react';
import PropTypes from 'prop-types';

const KidsCategory = (props) => {
  const {
    libelle_tarif: libelleTarif,
    nom_complet: nom,
    date_debut: date,
    montant,
  } = props;
  return (
    <>
      <div id="tarifs">
        <h1>{nom}</h1>
        <p>
          <strong>{libelleTarif}</strong>
        </p>
        <p>
          Tarifs:
          <strong>{montant}</strong>
        </p>
        <p>
          <strong>{date}</strong>
        </p>
      </div>
    </>
  );
};

KidsCategory.propTypes = {
  kids: PropTypes.shape({
    records: PropTypes.string,
    fields: PropTypes.string,
  }).isRequired,
  nom_complet: PropTypes.string.isRequired,
  libelle_tarif: PropTypes.string.isRequired,
  montant: PropTypes.bool.isRequired,
  date_debut: PropTypes.bool.isRequired,
};

export default KidsCategory;
