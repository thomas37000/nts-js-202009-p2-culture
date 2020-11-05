import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import When from './When';
import HomeCalendar from './HomeCalendar';

const Section = styled.section`
  width: 90vw;
  height: 43.5vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-filters {
    width: 45%;
    height: 100%;
  }

  .right-filters {
    width: 45%;
    height: 100%;
  }

  .react-calendar {
    width: 100%;
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
          <HomeCalendar />
        </div>
      </Section>
    );
  }
}

export default Filers;
