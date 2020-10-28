import React from 'react';
import './DetailCard.css';

const DetailCard = () => {
  return (
<figure className="detailCard"> 
<img className="photo"
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
        <h4 className="description">Description : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae explicabo dolores eius reprehenderit asperiores molestiae, molestias deleniti eveniet sit? Iusto, nesciunt laboriosam! Quas iste similique fugit facere quis quaerat!</span></h4>
        <h4 className="price">Tarif : <span>8 euros</span></h4>
        <h4 className="accessibilité">Accessiblité : <span>sourds et malentendants</span></h4>
        <h4 className="accessibilité">Gratuité pour : <span>enfants et demandeurs d'emploi</span></h4>
        <h4>Lieu : <span>Museum d'histoires naturelles - Nantes</span></h4>
        <h4>Horaire : <span>9h - 18h</span></h4>
      </div>
      <div class="location">
        <div class="contact">
          <h3>Coordonnées :</h3>
          <p>12 Rue Voltaire, 44000 Nantes</p>
              <a class="contactLinks" href="tel:+33240415500">02 40 41 55 00</a>
        </div>
        <div>
            <a class="contactLinks" href="mailto:contact@museum.com">contact@museum.com</a>
        </div>
        <div class="map">
        <iframe
          src="https://goo.gl/maps/gfpwj2aMgwTsRtEy7"
        ></iframe>
        </div>
      </div>
    </section>
</figure>   
  );
};

export default DetailCard;