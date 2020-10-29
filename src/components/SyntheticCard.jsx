import React from 'react';
import './SyntheticCard.css';

const SyntheticCard = () => {
  return (
    <div className="Card">
      <div className="horaire">
        <span>9h - 18h</span>
      </div>
      <img
        src="https://www.college-penanroz-pont-aven.ac-rennes.fr/sites/college-penanroz-pont-aven.ac-rennes.fr/IMG/jpg/musee_d_histoires_naturelles.jpg"
        alt="évènement"
      />
      <div className="information">
        <h5>
          <span>Exposition</span> :<span>Les dinosaures</span>
        </h5>
        <p>
          Lieu :<span>Museum d'histoires naturelles - Nantes</span>
        </p>
      </div>
      <div className="price">
        <span>8 euros</span>
      </div>
    </div>
  );
};

export default SyntheticCard;
