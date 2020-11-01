import React, { Component } from 'react';
import axios from 'axios';
import Tarifs from './TarifCard';

class TarifCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarifs: null,
    };
    this.getTarifs = this.getTarifs.bind(this);
  }

  componentDidMount() {
    this.getTarifs();
  }

  getTarifs() {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_equipements-culturels-nantes-tarifs&q=&facet=nom_complet&facet=type_tarif'
      )
      .then((response) => response.data)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        this.setState({
          tarifs: data,
        });
      });
  }

  render() {
    const { tarifs } = this.state;

    return (
      <div>
        {tarifs &&
          tarifs.records.map((tarif) => (
            <li>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Tarifs {...tarif.fields} />
            </li>
          ))}
      </div>
    );
  }
}

export default TarifCategory;
