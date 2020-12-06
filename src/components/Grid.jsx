import React from 'react';
import { Link } from 'react-router-dom';
import ligne from './img/ligne-verte-nantes.jpg';
// import chateau from './img/chateau.jpg';
import animation from './img/animation.jpg';
import cinema from './img/cinema.jpg';
import Container from './styledComponents/GridStyle';

const Grid = () => {
  return (
    <Container>
      <section className="container">
        <div className="bg">
          <img src={cinema} alt="cinéma" />
          <div className="overlay">
            <h2>
              <Link to="/diversite/">Toute l&apos;année</Link>
            </h2>
            <p>
              <Link to="/diversite/">Diversité culturelle...</Link>
            </p>
          </div>
        </div>
        <div className="bg">
          <img src={ligne} alt="la_ligne_verte" />
          <div className="overlay">
            <h2>
              <Link to="/voyage/">Voyage à Nantes</Link>
            </h2>
            <p>
              <Link to="/voyage/">Le long de la ligne verte...</Link>
            </p>
          </div>
        </div>
        <div className="bg">
          <img src={animation} alt="40_pieds" />
          <div className="overlay">
            <h2>
              <Link to="/animations/">Animations estivales</Link>
            </h2>
            <p>
              <Link to="/animations/">Un été à la nantaise...</Link>
            </p>
          </div>
        </div>
        {/* <div className="bg">
          <img src={chateau} alt="Chateau_des_Ducs" />
          <div className="overlay">
            <h2>
              <Link to="/patrimoine/">Journées du patrimoine</Link>
            </h2>
            <p>
              <Link to="/patrimoine/">Les monuments nantais...</Link>
            </p>
          </div>
        </div> */}
      </section>
    </Container>
  );
};

export default Grid;
