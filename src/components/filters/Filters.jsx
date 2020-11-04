import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import When from './When';
import Calendar from 'react-calendar';

const Section = styled.section`
  width: 90vw;
  height: 30vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-filters {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .right-filters {
    width: 45%;
    height: 100%;
    diplay: flex;
    justify-content: center;
    align-items: center;
  }
`;
class Filers extends React.Component {
  render() {
    return (
      <Section className="Filters">
        <div className="left-filters">
          <Slider />
          <When />
        </div>
        <div className="right-filters">
          <p>UN CALENDRIER SERA ICI, BIENTÔT </p>
        </div>
      </Section>
    );
  }
}

export default Filers;
