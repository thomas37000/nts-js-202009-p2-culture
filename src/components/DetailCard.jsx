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
      <h1 className="catégorie">
        <span>Exposition : </span>
        <span> Les dinosaures</span>
      </h1>
    </section>
    <section className="Card">
      <div className="information">
        <h1 className="date">20/10/2020</h1>
        <h4 className="description">
          <span>Description : </span>
          <span>Lorem ipsum...</span>
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
      <div class="eventLocation">
        <div class="locationContainer">
          <h2>Coordonnées</h2>
          <p>12 Rue Voltaire, 44000 Nantes</p>
          <div class="location">
              <i class="fas fa-phone-alt"></i>
              <a class="contactLinks" href="tel:+33240415500">02 40 41 55 00</a>
          </div>
        </div>
        <div>
            <i class="fas fa-envelope"></i>
            <a class="contactLinks" href="mailto:contact@museum.com"
                >contact@museum.com</a>
        </div>
        <iframe
          src="https://www.cityzeum.com/staticmaplite/staticmap.php?filefrmt=jpeg&center=47.212333,-1.5646297&zoom=13&size=600x280&maptype=mapnik&markers=47.212333,-1.5646297,ol-marker-green"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </section>
</figure>   
  );
};

export default DetailCard;