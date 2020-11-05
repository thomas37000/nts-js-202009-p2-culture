import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import When from './When';

const Section = styled.section`
  width: 90vw;
  height: 30vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class Filers extends React.Component {
  render() {
    return (
      <Section className="Filters">
        <Slider />
        <When />
      </Section>
    )
  }
}

export default Filers;