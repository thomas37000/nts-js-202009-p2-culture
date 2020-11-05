import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset: '244400404_equipements-culturels-nantes-tarifs',
          key: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 100,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          tarifs: data.records,
        });
      });
  }

  render() {
    const { tarifs } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
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
