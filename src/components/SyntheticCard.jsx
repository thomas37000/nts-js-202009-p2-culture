import React from 'react';
import './SyntheticCard.css';

const SyntheticCard = () => {
  return (
    <figure className="Card">
      <div className="horaire">
        <span>9h - 18h</span>
      </div>
      <img
        src="https://www.college-penanroz-pont-aven.ac-rennes.fr/sites/college-penanroz-pont-aven.ac-rennes.fr/IMG/jpg/musee_d_histoires_naturelles.jpg"
        alt="évènement"
      />
      <div className="information">
        <h4 className="catégorie">
          <span>Exposition : </span>
          <span>Les dinosaures</span>
        </h4>
        <h4 className="lieu">
          <span>Lieu : </span>
          <span>Museum d'histoires naturelles - Nantes</span>
        </h4>
        <h4 className="description">
          <span>Description : </span>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi impedit tempora debitis voluptatibus beatae aspernatur non, itaque natus autem culpa nam, et saepe libero facere a, atque adipisci corporis modi.</span>
        </h4>
      </div>
      <div className="price">
        <span>8 euros</span>
      </div>
    </figure>
  );
};

export default SyntheticCard;
