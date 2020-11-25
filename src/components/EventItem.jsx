/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 1rem;
  padding: 1rem;
  width: 90vw;
  height: auto;
  font-family: Roboto, sans-serif;
  background-color: #c4c4c4;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
  font-size: 0.75em;

  .SyntheticTimetable {
    width: 7.5rem;
    font-size: 1.2rem;
    text-align: center;
    align-self: center;
    margin-bottom: 1rem;
  }

  .category {
    color: red;
  }

  span,
  h3,
  h4 {
    font-size: 12px;
    margin: 0.5rem;
  }

  .SyntheticPrice h4 {
    font-size: 12px;
  }

  .SyntheticPhoto {
    margin: auto;
    max-width: 15rem;
    height: auto;
  }

  .SyntheticCard.Information {
    flex-wrap: wrap;
    margin: auto;
  }

  .SyntheticPrice {
    width: auto;
    text-align: left;
  }

  .SyntheticDetail {
    width: 10rem;
    text-align: center;
    align-self: center;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    padding: 1rem;
    width: 50vw;
    height: auto;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
    font-size: 0.75em;

    .SyntheticTimetable {
      font-size: 12px;
      text-align: left;
      width: 9rem;
    }
    .SyntheticPhoto {
      max-width: 15rem;
      height: auto;
    }
    .SyntheticInformation {
      width: 25rem;
      height: auto;
      margin: 1rem;
    }
    .SyntheticPrice {
      width: 20rem;
      margin: 1rem;
      text-align: left;
    }
    .SyntheticDetail {
      width: 10rem;
      font-size: 0.8rem;
      align-self: center;
      text-align: center;
    }
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
      recordid: id,
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
              <h3 className="category">
                {category !== undefined ? category : 'Autres évènements'}
              </h3>
              <h3 className="name">{name}</h3>
            </div>
            <div className="SyntheticLocation">
              <h4 className="location">Lieu : {location}</h4>
            </div>
            <div className="SyntheticCity">
              <h4 className="city">Ville : {city}</h4>
            </div>
          </div>
          <div className="SyntheticPrice">
            <h4 className="price">Tarif : {price}</h4>
          </div>
          <div className="SyntheticDetail">
            <Link to={`/event/${id}`}>Voir plus</Link>
          </div>
        </DIV>
      </div>
    );
  }
}

EventItem.propTypes = {
  id_manif: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  media_1: PropTypes.string.isRequired,
  lieu: PropTypes.string.isRequired,
  ville: PropTypes.string.isRequired,
  precisions_tarifs: PropTypes.string,
  libelle_festival: PropTypes.string,
  heure_debut: PropTypes.string,
  heure_fin: PropTypes.string,
};

EventItem.defaultProps = {
  precisions_tarifs: '',
  libelle_festival: '',
  heure_debut: '',
  heure_fin: '',
};
export default EventItem;
