/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable lines-between-class-members */
import React from 'react';
import styled from 'styled-components';

const CLOCK = styled.div`
  color: red;

  .App-clock {
    margin: 2rem;
  }
`;

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toISOString().split('T')[0],
    };
  }

  tick() {
    this.setState({
      date: new Date().toISOString().split('T')[0],
    });
  }
  render() {
    const { date } = this.state;
    return (
      <div>
        <CLOCK>
          <p className="App-clock">Aujourd'hui : {date}</p>
        </CLOCK>
      </div>
    );
  }
}
