import React from 'react';
import './css/Acceuil.css';

import spectacle from './img/concerts.jpg';
import football from './img/fc-nantes.png';
import expo from './img/expo.jpg';
import marionnettes from './img/marionnettes.jpeg';

const Grid = () => {
  return (
    <>
      <section className="container">
        <div className="bg">
          <img src={spectacle} alt="Culture" />
          <div className="overlay">
            <h2>Spectacles</h2>
            <p>Aller à un Concert sur l île de Nantes.</p>
          </div>
        </div>
        <div className="bg">
          <img src={expo} alt="exposition" />
          <div className="overlay">
            <h2>Exposition</h2>
            <p>quoi visiter sur l île de Nantes</p>
          </div>
        </div>
        <div className="bg">
          <img src={football} alt="Sport à Nantes" />
          <div className="overlay">
            <h2>Sport</h2>
            <p>Sport sur l île de Nantes.</p>
          </div>
        </div>
        <div className="bg">
          <img
            src={marionnettes}
            alt="marionnettes enfants"
            className="histoire"
          />
          <div className="overlay">
            <h2>Enfants</h2>
            <p>Spectacles pour enfants.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
