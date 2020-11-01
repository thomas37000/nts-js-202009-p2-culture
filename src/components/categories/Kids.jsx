import React, { Component } from 'react';
import axios from 'axios';

// import KidsCard from './KidsCard';
// import KidsCard from './testcard';
import Expos from './EvenementCard';

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
        'https://data.nantesmetropole.fr/api/records/1.0/search/?dataset=244400404_agenda-animations-culturelles-bibliotheque-municipale-nantes&q=&facet=precisions_public&facet=accueil_enfant&facet=date&facet=complet&facet=annule&facet=reporte&facet=lieu&facet=gratuit'
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
              <Expos {...kid.fields} />
            </li>
          ))}
      </div>
    );
  }
}

export default Kids;
