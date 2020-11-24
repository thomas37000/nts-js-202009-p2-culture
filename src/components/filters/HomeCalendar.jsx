import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media screen and (min-width: 768px) {
      font-size: 0.9rem;
      text-align: left;
      margin-bottom: 1rem;
    }
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
