import React, {Component} from 'react';
import ScrollText from 'react-scroll-text';
import styled from 'styled-components';

const DIV = styled.div`
text-shadow: 2px 2px 2px white;
color: #000080;
font-size: xx-large;
padding: 20px;
}
`;

class Scrolltxt extends Component {
  render () {
    return (
      <DIV>
      <ScrollText speed={100}>
        Bienvenue sur Nant'Events, un événement pour chacune de vos envies !
      </ScrollText>
     </DIV> 
    )
  }
}

export default Scrolltxt;