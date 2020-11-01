import React from 'react';
import styled from 'styled-components';

const DIV = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  margin: 2rem;
  padding: 1em;
  width: auto;
  height: auto;
  font-family: Roboto, sans-serif;
  border: 1px solid #1b1a1a;
  border: 1px solid #1b1a1a;
  background-color: rgb(245, 239, 239);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;


.SyntheticHoraire {
  width: 3rem;
}

.SyntheticPhoto {
  margin: auto;
  max-width: 15rem;
  height: auto;
  margin: 1rem;
}

.SyntheticCard.Information {
  flex-wrap: wrap;
  margin: auto;
}

.SyntheticPrice {
  width: auto;
  text-align: right;
  margin: 0.5rem;
}

@media screen and (min-width: 800px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  max-width: 35rem;
  max-height: auto;
  border: 1px solid #1b1a1a;
  background-color: rgb(245, 239, 239);
  border-radius: 2px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

  .SyntheticHoraire {
    width: 5rem;
  }
  .SyntheticPhoto {
    width: 9rem;
    height: auto;
  }
  .SyntheticInformation {
    width: 20rem;
    height: auto;
  }
  .SyntheticPrice {
    width: 10rem;
    text-align: right;
    margin-bottom: 7rem;

  .avis {
    text-align: right;
  }
}
`;

function SyntheticCard() {
  return (
    <div>
      <DIV>
        <div className="SyntheticHoraire">
          <span>9h - 18h</span>
        </div>
        <img
          className="SyntheticPhoto"
          src="https://www.college-penanroz-pont-aven.ac-rennes.fr/sites/college-penanroz-pont-aven.ac-rennes.fr/IMG/jpg/musee_d_histoires_naturelles.jpg"
          alt="évènement"
        />
        <div className="SyntheticInformation">
          <div className="SyntheticCatégorie">
            <h4>
              <span className="catégorie">Exposition </span>:{' '}
              <span className="nom-évènement">Les dinosaures</span>
            </h4>
          </div>
          <div className="SyntheticLieu">
            <h4>
              Lieu : <span className="lieu">Museum d'histoires naturelles</span>
            </h4>
          </div>
          <div className="SyntheticVille">
            <h4>
              Ville : <span className="ville">Nantes</span>
            </h4>
          </div>
          <div className="Note">
            <h4>
              Note :{' '}
              <span className="stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            </h4>
            <div className="Plus-de-détail">
              <a href="#">Voir plus</a>
            </div>
          </div>
        </div>
        <div className="SyntheticPrice">
          <h4>
            Tarif : <span className="tarif">8 euros</span>
          </h4>
        </div>
      </DIV>
    </div>
  );
}

export default SyntheticCard;
