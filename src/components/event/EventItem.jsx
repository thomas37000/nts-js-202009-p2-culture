/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DIV from '../styledComponents/EventItemStyle';

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
              <h4 className="location">
                <span className="TitleColor">Lieu :</span> {location}
              </h4>
            </div>
            <div className="SyntheticCity">
              <h4 className="city">
                <span className="TitleColor">Ville :</span> {city}
              </h4>
            </div>
          </div>
          <div className="SyntheticPrice">
            <h4 className="price">
              <span className="TitleColor">Tarif :</span> {price}
            </h4>
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
