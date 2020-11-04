import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 50%; 
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    background-color: #f2f2f2;
    border: 2px solid #000;
    box-shadow: 0px 5px 12px;
    width: 20%;
    height: 50%;
    text-align: cneter;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .w-e {
    border-right: 2px solid #000;
  }

  .today {
    border-left: 2px solid #000;
  }
  `

 class When extends React.Component {
  render() {
    return (
      <Section className="When">
        <span className='today'>Aujourd'hui</span>
        <span className='in-day'>Journée</span>
        <span className='in-evening'>Soirée</span>
        <span className='w-e'>Week-end</span>
      </Section>
    )
  }
 }

export default When;