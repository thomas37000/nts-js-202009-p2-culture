import React from 'react';
import './SyntheticCard.css';

const SyntheticCard = () => {
  return (
    <figure className="Card">
      <div className="horaire">
        <span>9h - 18h</span>
      </div>
      <img
        src="https://www.guide-tourisme-france.com/IMAGES/IMG2686.jpg"
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
          <span>Lorem ipsum...</span>
        </h4>
      </div>
      <div className="price">
        <span>8 euros</span>
      </div>
    </figure>
  );
};

export default SyntheticCard;
