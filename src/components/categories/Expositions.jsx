import React, { Component } from 'react';
import axios from 'axios';
// import Expos from './Expo';
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
        'https://cors-anywhere.herokuapp.com/https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier'
      )
      .then((response) => response.data)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
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
