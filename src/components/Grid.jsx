/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import spectacle from './imgGrid/concerts.jpg';
import activité from './imgGrid/activité.jpg';
import expo from './imgGrid/expo.jpg';
import marionnettes from './imgGrid/marionnettes.jpeg';

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
    padding: 10px;
  }

  .bg img {
    width: 100vw;
    height: 50vh;
    margin-bottom: -15px;
  }

  .bg,
  .overlay {
    text-align: center;
  }

  .bg .overlay h2 {
    font-family: 'Roboto', serif;
    font-size: 3em;
    margin-top: 50px;
    padding-top: 10%;
    cursor: default;
  }

  .bg .overlay h2 a,
  .bg .overlay p > a:hover {
    color: #fff;
    text-decoration: none;
  }

  .bg .overlay p > a {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    color: #000080;
  }

  .bg .overlay p:hover {
    font-family: 'Roboto', sans-serif;
    font-size: 25px;
    background-color: #000080;
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
    .container {
      height: 40vh;
      margin: auto;
      display: flex;
      column-gap: 13px;
      width: 100vw;
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
      padding-top: 35%;
      margin: auto;
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
    <div>
      <Container>
        <section className="container">
          <div className="bg">
            <img src={spectacle} alt="Culture" />
            <div className="overlay">
              <h2>
                <Link to="/spectacles/">Spectacles</Link>
              </h2>
              <p>
                <Link to="/spectacles/">Aller à un Concert à Nantes.</Link>
              </p>
            </div>
          </div>
          <div className="bg">
            <img src={expo} alt="exposition" />
            <div className="overlay">
              <h2>
                <Link to="/expositions/">Expositions</Link>
              </h2>
              <p>
                <Link to="/expositions/">
                  Quoi visiter sur l'île de Nantes.
                </Link>
              </p>
            </div>
          </div>
          <div className="bg">
            <img src={activité} alt="Sport à Nantes" />
            <div className="overlay">
              <h2>
                <Link to="/activité/">Activité à Partager</Link>
              </h2>
            </div>
          </div>
          <div className="bg">
            <img src={marionnettes} alt="marionnettes enfants" />
            <div className="overlay">
              <h2>
                <Link to="/enfants/">Enfants</Link>
              </h2>
              <p>
                <Link to="/enfants/">Spectacles pour Enfants.</Link>
              </p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Grid;
