/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './SyntheticCard.css';

const SyntheticCard = () => {
  return (
    <div className="Card">
      <div className="Horaire">
        <span>9h - 18h</span>
      </div>
      <img
        src="https://www.college-penanroz-pont-aven.ac-rennes.fr/sites/college-penanroz-pont-aven.ac-rennes.fr/IMG/jpg/musee_d_histoires_naturelles.jpg"
        alt="évènement"
      />
      <div className="Information">
        <div className="Catégorie">
          <h4>Exposition</h4>
        </div>
        <div className="Name">
          <h4>Les dinosaures</h4>
        </div>
        <div className="Lieu">
          <h4>
            Lieu : <span>Museum d'histoires naturelles</span>
          </h4>
        </div>
        <div className="Ville">
          <h4>Nantes</h4>
        </div>
      </div>
      <div className="Price">
        <span>8 euros</span>
      </div>
    </div>
  );
};

export default SyntheticCard;
