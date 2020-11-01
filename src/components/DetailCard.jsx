import React from 'react';
import styled from 'styled-components';

const FIGURE = styled.figure`
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

  .eventName {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0;
  }

  .eventName h1 {
    margin: 0.5rem;
  }
  .eventName h2 {
    margin: 0.5rem;
  }

  .Card {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: auto;
    height: auto;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    background-color: rgb(245, 239, 239);
    border-radius: 2px;
    font-size: 0.75em;
  }

  .material-icons {
    font-family: 'Material Icons';
    font-size: 16px;
  }

  iframe {
    max-width: 90%;
    max-height: 90%;
    margin: 1rem;
  }

  .horaire {
    width: 3rem;
  }

  .photo {
    width: 100%;
    height: auto;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.15);
    margin-bottom: var(--section-margin);
  }

  .information,
  .location {
    margin: 0.5rem;
  }

  .price span {
    width: auto;
  }

  .location,
  .map {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: auto;
  }

  @media screen and (min-width: 800px) {
    .photo {
      display: none;
    }

    .eventName {
      display: flex;
      justify-content: center;
      background-image: url('https://www.guide-tourisme-france.com/IMAGES/IMG2686.jpg');
      height: 60vh;
      position: relative;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    .eventName h1,
    .eventName h2 {
      font-size: 5rem;
      color: #f5f2f2;
      text-align: center;
      letter-spacing: 0.3rem;
      text-shadow: 3px 4px 8px #0e0d0d;
      width: 100%;
    }

    .Card {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      text-align: left;
      width: auto;
      height: auto;
      background-color: rgb(245, 239, 239);
      box-shadow: none;
      border-radius: none;
      font-size: 0.75em;
    }

    .information {
      margin: 2rem;
    }

    .price {
      width: auto;
    }
  }
`;

const DetailCard = () => {
  return (
    <div>
      <FIGURE className="DetailCard">
        <img
          className="photo"
          src="https://www.guide-tourisme-france.com/IMAGES/IMG2686.jpg"
          alt="évènement"
        />
        <section className="eventName">
          <h1>Exposition :</h1>
          <h2>Les dinosaures</h2>
        </section>
        <section className="Card">
          <div className="information">
            <h1 className="date">20/10/2020</h1>
            <h4 className="description">
              Description :{' '}
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem vitae explicabo dolores eius reprehenderit
                asperiores molestiae, molestias deleniti eveniet sit? Iusto,
                nesciunt laboriosam! Quas iste similique fugit facere quis
                quaerat!
              </span>
            </h4>
            <h4 className="price">
              Tarif : <span>8 euros</span>
            </h4>
            <h4 className="accessibilité">
              Accessiblité : <i className="material-icons">accessible</i>
              <i className="material-icons">hearing_disabled</i>
              <i className="material-icons">child_friendly</i>
            </h4>
            <h4 className="gratuité">
              Gratuité : <span>enfants et demandeurs d'emploi</span>
            </h4>
            <h4 className="lieu">
              Lieu : <span>Museum d'histoires naturelles - Nantes</span>
            </h4>
            <h4>
              Horaire : <span>9h - 18h</span>
            </h4>
          </div>
          <div className="location">
            <div className="contact">
              <h3>Coordonnées :</h3>
              <p>12 Rue Voltaire, 44000 Nantes</p>
              <p>
                <i className="material-icons">perm_phone_msg</i>
                <a className="contactLinks" href="tel:+33240415500">
                  {' '}
                  02 40 41 55 00
                </a>
              </p>
              <p>
                <i className="material-icons">email </i>
                <a className="contactLinks" href="mailto:contact@museum.com">
                  {' '}
                  contact@museum.com
                </a>
              </p>
            </div>
            <div className="map">
              <iframe src="https://google/maps/gfpwj2aMgwTsRtEy7" />
            </div>
          </div>
        </section>
      </FIGURE>
    </div>
  );
};

export default DetailCard;
