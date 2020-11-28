import React, { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  text-shadow: 2px 2px 2px white;
  color: #000080;
  padding: 20px;
  text-align: center;
  font-size: smaller;

  @media screen and (min-width: 765px) {
    h1 {
      text-align: center;
      font-size: xx-larger;
    }
  }
`;

class Scrolltxt extends Component {
  render() {
    return (
      <DIV>
        <div className="scrolldesktop">
          <h1>
            Bienvenue sur Nant&apos;Events, un événement pour chacune de vos
            envies !
          </h1>
        </div>
      </DIV>
    );
  }
}

export default Scrolltxt;
