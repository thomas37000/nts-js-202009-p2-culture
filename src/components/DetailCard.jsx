import React from 'react';
import './DetailCard.css';

const DetailCard = () => {
  return (
<figure className="DetailCard"> 
<img
      src="https://www.guide-tourisme-france.com/IMAGES/IMG2686.jpg"
      alt="évènement"
    />
    <section className="EventName">
      <h1>
      <span className="catégorie">Exposition :</span>
      <span> Les dinosaures</span>
      </h1>
    </section>
    <section className="Card">
      <div className="information">
        <h1 className="date">20/10/2020</h1>
        <h4 className="description">
          <span>Description : </span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem vitae explicabo dolores eius reprehenderit asperiores molestiae, molestias deleniti eveniet sit? Iusto, nesciunt laboriosam! Quas iste similique fugit facere quis quaerat!</span>
        </h4>
        <div className="price">
          <span>8 euros</span>
        </div>
        <h4 className="lieu">
          <span>Lieu : </span>
          <span>Museum d'histoires naturelles - Nantes</span>
        </h4>
        <div className="horaire">
          <span>9h - 18h</span>
        </div>
      </div>
      <div class="location">
        <div class="contact">
          <h3>Coordonnées :</h3>
          <p>12 Rue Voltaire, 44000 Nantes</p>
          <div class="location">
              <a class="contactLinks" href="tel:+33240415500">02 40 41 55 00</a>
          </div>
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