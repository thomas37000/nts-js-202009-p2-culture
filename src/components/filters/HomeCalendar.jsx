import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    return (
      <Section>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </Section>
    );
  }
}

export default HomeCalendar;
