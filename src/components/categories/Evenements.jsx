import React, { Component } from 'react';
import axios from 'axios';

import SyntheticCard from './SyntheticCard';

class Expositions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: null,
    };
    this.getFilters = this.getFilters.bind(this);
  }

  componentDidMount() {
    this.getFilters();
  }

  getFilters() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier&key=a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f&rows=100'
      )
      .then((response) => response.data)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data.records);
        this.setState({
          category: data,
        });
      });
  }

  render() {
    const { category } = this.state;

    return (
      <div>
        {category &&
          category.records.map((categorie) => (
            <li key={category.id} className="liste">
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <SyntheticCard key={category.id} {...categorie.fields} />
            </li>
          ))}
      </div>
    );
  }
}

export default Expositions;
