import React, { Component } from 'react';
import axios from 'axios';
import Tarifs from './TarifCard';

class TarifCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarifs: [],
    };
    this.getTarifs = this.getTarifs.bind(this);
  }

  componentDidMount() {
    this.getTarifs();
  }

  getTarifs() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_equipements-culturels-nantes-tarifs&q=&facet=nom_complet&facet=type_tarif&key=a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f&rows=100'
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data.records);
        this.setState({
          tarifs: data,
        });
      });
  }

  render() {
    const { tarifs } = this.state;

    return (
      <div>
        {tarifs.map((tarif) => (
            <li>
              <Tarifs {...tarif.fields} />
            </li>
          ))}
      </div>
    );
  }
}

export default TarifCategory;
