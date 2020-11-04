import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import KidsCard from './KidsCard';
// import KidsCard from './testcard';
import Expos from './EvenementCard';

class Kids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kids: [],
    };
    this.getKids = this.getKids.bind(this);
  }

  componentDidMount() {
    this.getKids();
  }

  getKids() {
    axios
      .get('https://data.nantesmetropole.fr/api/records/1.0/search/', {
        params: {
          dataset:
            '244400404_agenda-animations-culturelles-bibliotheque-municipale-nantes',
          key: 'a2c65fe09812bd0c8a2628bdfe6f71bb1bd48facca5b74d63070e77f',
          rows: 100,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          kids: data.records,
        });
      });
  }

  render() {
    const { kids } = this.state;

    return (
      <div>
        <Link to="/">Home</Link>
        {kids.map((kid) => (
          <li>
            <Expos {...kid.fields} />
          </li>
        ))}
      </div>
    );
  }
}

export default Kids;
