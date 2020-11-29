/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ligne from './img/ligne-verte-nantes.jpg';
import chateau from './img/chateau.jpg';
import animation from './img/animation.jpg';
import cinema from './img/cinema.jpg';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i');

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .container {
    margin-bottom: 10px;
  }

  .bg {
    position: relative;
  }

  .bg img {
    width: 90vw;
    height: 40vh;
    margin: 2px;
    box-shadow: #000 5px 5px 0px;
  }

  .bg,
  .overlay {
    text-align: center;
  }

  .bg .overlay h2 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    padding-top: 30%;
  }

  .bg .overlay h2 a,
  .bg .overlay p > a {
    text-decoration: none;
    padding: 5px;
    border-radius: 5px;
    background: #fff;
    color: #262a2d;
  }

  .bg .overlay p > a {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: tomato;
  }

  .bg .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
  }

  img,
  .overlay {
    -webkit-transition: 0.3s all;
    transition: 0.3s all;
    border-radius: 3px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    .container {
      height: 37.5vh;
      margin: auto;
      display: flex;
      column-gap: 13px;
      width: 97%;
    }
    .bg {
      height: 100%;
      width: inherit;
    }

    .bg .overlay {
      opacity: 0;
      background: rgba(0, 0, 0, 0.2);
    }

    .bg .overlay h2 {
      padding-top: 30%;
      font-size: 2rem;
      margin: auto;
    }

    .bg .overlay p > a {
      color: tomato;
      display: flex 80%;
      font-size: 1.25rem;
      justify-content: center;
    }

    .bg .overlay h2 a,
    .bg .overlay p > a {
      background: #fff;
    }

    .bg:hover .overlay {
      opacity: 1;
    }

    .bg:hover img {
      -webkit-filter: blur(2px);
      filter: blur(2px);
    }

    .bg img {
      width: 100%;
      height: 100%;
      margin-bottom: -15px;
    }
  }
`;

const Grid = () => {
  return (
    <Container>
      <section className="container">
        <div className="bg">
          <img src={cinema} alt="cinéma" />
          <div className="overlay">
            <h2>
              <Link to="/diversite/">Toute l'année</Link>
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
        <div className="bg">
          <img src={chateau} alt="Chateau_des_Ducs" />
          <div className="overlay">
            <h2>
              <Link to="/patrimoine/">Journées du patrimoine</Link>
            </h2>
            <p>
              <Link to="/patrimoine/">Les monuments nantais...</Link>
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Grid;
