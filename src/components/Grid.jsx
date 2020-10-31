import React from 'react';
import styled from 'styled-components';

import spectacle from './categories/img/concerts.jpg';
import football from './categories/img/fc-nantes.jpg';
import expo from './categories/img/expo.jpg';
import marionnettes from './categories/img/marionnettes.jpeg';

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
    color: #000080;
  }

  .resto {
    pointer-events: none;
  }

  .bg .overlay h2 a {
    color: #fff;
  }

  .bg .overlay p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    font-size: 25px;
  }

  .bg .overlay p:hover {
    font-family: 'Roboto', sans-serif;
    color: #fff;
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

  .histoire {
    height: 100vh;
  }

  @media screen and (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      column-gap: 3px;
      max-width: max-content;
    }
    .bg {
      height: 55vh;
    }

    .bg .overlay {
      opacity: 0;
      background: rgba(0, 0, 0, 0.2);
    }

    .bg .overlay h2 {
      padding-top: 22%;
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
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default Grid;
