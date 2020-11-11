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

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleDateString(),
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      date: new Date().toLocaleString(),
    });
  }
  render() {
    return (
      <div>
        <CLOCK>
          <p className="App-clock">Aujourd'hui : {this.state.date}</p>
        </CLOCK>
      </div>
    );
  }
}

export default Clock;
