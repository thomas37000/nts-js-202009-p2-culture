import React from 'react';
import './SyntheticCard.css';

const SyntheticCard = () => {
  return (
    <div className="SyntheticCard">
      <div className="SyntheticHoraire">
        <span>9h - 18h</span>
      </div>
      <img
        src="https://www.college-penanroz-pont-aven.ac-rennes.fr/sites/college-penanroz-pont-aven.ac-rennes.fr/IMG/jpg/musee_d_histoires_naturelles.jpg"
        alt="évènement"
      />
      <div className="SyntheticInformation">
        <div className="SyntheticCatégorie">
          <h4>Exposition</h4>
        </div>
        <div className="SyntheticName">
          <h4>Les dinosaures</h4>
        </div>
        <div className="SyntheticLieu">
          <h4>
            Lieu : <span>Museum d'histoires naturelles</span>
          </h4>
        </div>
        <div className="SyntheticVille">
          <h4>Nantes</h4>
        </div>
      </div>
      <div className="SyntheticPrice">
        <span>8 euros</span>
      </div>
    </div>
  );
};

export default SyntheticCard;
