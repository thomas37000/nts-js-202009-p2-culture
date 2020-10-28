import React, { Component } from 'react';
import axios from 'axios';
import Category from './Category';

class FilterCategory extends Component {
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
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier'
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
        <button id="btn" type="button" onClick={this.getFilters}>
          select a new category
        </button>
        <div>
          {category &&
            category.records.map((categorie) => (
              <li>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Category {...categorie.fields} />
              </li>
            ))}
        </div>
      </div>
    );
  }
}

export default FilterCategory;
