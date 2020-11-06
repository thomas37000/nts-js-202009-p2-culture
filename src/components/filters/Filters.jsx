import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import When from './When';
import HomeCalendar from './HomeCalendar';

const Section = styled.section`
  width: 90vw;
  height: 43.6vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right-filters {
    display: none;
  }
  .left-filters {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    .left-filters {
      width: 45%;
      height: 100%;
    }
    .right-filters {
      width: 45%;
      height: 100%;
    }
    .react-calendar {
      display: block;
      width: 100%;
    }
    .Filters {
      width: 95vw;
      font-size: 1rem;
    }
    .right-filters {
      display: block;
    }
  }
`;
class Filters extends React.Component {
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

export default Filters;
