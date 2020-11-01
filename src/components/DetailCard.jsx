import React from 'react';
import './DetailCard.css';

const DetailCard = () => {
  return (
    <figure className="DetailCard">
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
    </figure>
  );
};

export default DetailCard;
