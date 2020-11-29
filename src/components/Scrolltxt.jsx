import React, { Component } from 'react';
import styled from 'styled-components';

const DIV = styled.div`
  padding: 3em;
  background: linear-gradient(
    to right,
    #f2eb4a,
    #d9f04e,
    #bdf458,
    #9ff765,
    #7bf976
  );

  @media screen and (min-width: 765px) {
    h1 {
      text-align: center;
      font-weight: 400;
      font-style: normal;
      color: #262a2d;
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
