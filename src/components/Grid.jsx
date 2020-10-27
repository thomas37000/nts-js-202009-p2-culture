import React from 'react';
import { render } from 'react-dom';
import Nav from 'react-bootstrap/Nav';
import './css/Acceuil.css';

// import jazz from './img/jazz.jpg';
import spectacle from './img/concert.jpg';
import football from './img/fc-nantes.png';
import expo from './img/expo.jpg';
import marionnettes from './img/marionnettes.jpeg';

const Grid = () => {
  return (
    <>
      <Nav className="justify-content-center">
        <h1>Culture</h1>
      </Nav>
      <Nav className="justify-content-center" activeKey="/home">
        {/* <img src={jazz} width="75" height="75" alt="logo" /> */}
        <Nav.Item>
          <Nav.Link href="/home">Calendrier / Agenda</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Réservation</Nav.Link>
        </Nav.Item>
      </Nav>

      <section className="container">
        <div className="bg">
          <img src={spectacle} alt="Culture" />
          <div className="overlay">
            <h2>
              <a href="culture.html">Spectacle</a>
            </h2>
            <p>Aller à un Concert sur l île de Nantes.</p>
          </div>
        </div>
        <div className="bg">
          <img src={expo} alt="exposition" />
          <div className="overlay">
            <h2>
              <a href="musiques.html" className="zic">
                exposition
              </a>
            </h2>
            <p>quoi visiter sur l île de Nantes</p>
          </div>
        </div>
        <div className="bg">
          <img src={football} alt="Sport à Nantes" />
          <div className="overlay">
            <h2>
              <a href="restaurants.html" className="resto">
                Sport
              </a>
            </h2>
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
            <h2>
              <a href="histoire.html">Enfants</a>
            </h2>
            <p>Spectacles pour enfants.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Mentions légales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Partenaires</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Grid;
