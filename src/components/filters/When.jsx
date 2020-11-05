import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 20%;
    height: 50%;
    text-align: cneter;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
`;

class When extends React.Component {
  render() {
    return (
      <Section className="When">
        <span className="today">Aujourd'hui</span>
        <span className="in-day">Journée</span>
        <span className="in-evening">Soirée</span>
        <span className="w-e">Wee-end</span>
      </Section>
    );
  }
}

export default When;
