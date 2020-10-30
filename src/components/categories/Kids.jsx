import React, { Component } from 'react';
import axios from 'axios';
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
import KidsCategory from './KidsCategory';

class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: null,
    };
    this.getKids = this.getKids.bind(this);
  }

  componentDidMount() {
    this.getKids();
  }

  getKids() {
    axios
      .get(
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-evenements-nantes-nantes-metropole&q=&facet=emetteur&facet=rubrique&facet=lieu&facet=ville&facet=lieu_quartier'
      )
      .then((response) => response.data)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data);
        this.setState({
          kids: data,
        });
      });
  }

  render() {
    const { kids } = this.state;

    return (
      <div>
        {kids &&
          kids.records.map((kid) => (
            <li>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <KidsCategory {...kid.fields} />
            </li>
          ))}
      </div>
    );
  }
}

export default Kids;
