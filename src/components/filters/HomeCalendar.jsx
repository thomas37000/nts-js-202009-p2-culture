import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .h1-filter {
    font-size: 0.9rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media screen and (min-width: 768px) {
      font-size: 0.9rem;
      text-align: left;
      margin-bottom: 1rem;
    }
  }

  .react-calendar__tile--active {
    background: navy;
  }
  .react-calendar__tile--now {
    background: tomato;
  }
`;

class HomeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    const { changeDate } = this.props;
    this.setState({ date });
    changeDate(date);
  }

  render() {
    const { date } = this.state;
    return (
      <Section>
        <h1 className="h1-filter">Filtrer par date :</h1>
        <Calendar onChange={this.onChange} value={date} />
      </Section>
    );
  }
}

export default HomeCalendar;
