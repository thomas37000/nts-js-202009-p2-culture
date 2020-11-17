import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const Section = styled.section`
  border-radius: 5px;
  border: solid #006edc 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class HomeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showDate: null,
    };
    this.onChange = this.onChange.bind(this);
    this.validation = this.validation.bind(this);
    this.reset = this.reset.bind(this);
  }

  onChange(date) {
    const { changeDate } = this.props;
    this.setState({ date });
    console.log('homeCalendar :', date);
    changeDate(date);
  }

  validation() {
    this.setState({
      showDate: !this.state.showDate,
    });
  }

  reset() {
    this.setState({
      showDate: false,
    });
  }

  render() {
    return (
      <Section>
        <div onClick={this.reset}>
          <Calendar
            onChange={this.onChange}
            selectRange={true}
            value={this.state.date}
          />
        </div>
        {/* <p>Date choisi : {this.state.date.toLocaleDateString()}</p> */}
        <button onClick={this.validation}>Valider</button>
        {this.state.showDate ? (
          <div>
            <p>
              Du :{' '}
              {this.state.date[0]
                .toLocaleDateString()
                .split('/')
                .reverse()
                .join('-')}
            </p>
            <p>
              Au :{' '}
              {this.state.date[1]
                .toLocaleDateString()
                .split('/')
                .reverse()
                .join('-')}
            </p>
          </div>
        ) : null}
      </Section>
    );
  }
}

export default HomeCalendar;
