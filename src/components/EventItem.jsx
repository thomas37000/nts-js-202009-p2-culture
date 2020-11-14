/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  background-color: rgb(245, 239, 239);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

.SyntheticTimetable {
  width: 7.5rem;
  font-size: 1rem;
  text-align: center;
}

h3 {
  font-size: 12px;
}

.category {
  color: red;
}

h4 {
  font-size: 12px;
}

.SyntheticPrice h4 {
  font-size: 12px;
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
  text-align: left;
  /*margin-bottom: 7rem;*/
}

@media screen and (min-width: 800px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 1rem;
  max-width: 50rem;
  background-color: rgb(245, 239, 239);
  border-radius: 2px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);
  font-size: 0.75em;

  .SyntheticTimetable {
    font-size: 1rem;
    width: 7rem;
  }
  .SyntheticPhoto {
    width: 9rem;
    height: auto;
  }
  .SyntheticInformation {
    width: 18rem;
    height: auto;
    margin: 1rem;
  }
  .SyntheticPrice {
    width: 15rem;
    margin: 1rem;
    text-align: left;
    /*margin-bottom: 7rem;*/
}
`;

class EventItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  render() {
    const {
      libelle_festival: category,
      nom: name,
      media_1: media,
      date: eventdate,
      heure_debut: beginning,
      heure_fin: end,
      lieu: location,
      ville: city,
      precisions_tarifs: price,
    } = this.props;
    return (
      <div>
        <DIV>
          <div className="SyntheticTimetable">
            <h3>{eventdate}</h3>
            <span>
              {beginning} - {end}
            </span>
          </div>
          <img className="SyntheticPhoto" src={media} alt={name} />
          <div className="SyntheticInformation">
            <div className="SyntheticCategory">
              <h3 className="category">{category}</h3>
              <h3>
                <span className="name">{name}</span>
              </h3>
            </div>
            <div className="SyntheticLocation">
              <h4>
                Lieu : <span className="location">{location}</span>
              </h4>
            </div>
            <div className="SyntheticCity">
              <h4>
                Ville : <span className="city">{city}</span>
              </h4>
            </div>
          </div>
          <div className="SyntheticPrice">
            <h4>
              Tarif : <span className="price">{price}</span>
            </h4>
          </div>
        </DIV>
      </div>
    );
  }
}

EventItem.propTypes = {
  id_manif: PropTypes.string.isRequired,
  libelle_festival: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  heure_debut: PropTypes.string.isRequired,
  heure_fin: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string.isRequired,
};

export default EventItem;
