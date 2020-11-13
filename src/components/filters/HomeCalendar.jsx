import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class HomeCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(date) {
    const { changeDate } = this.props;
    this.setState({ date });
    console.log('homeCalendar :', date);
    changeDate(date);
  }

  render() {
    return <Calendar onChange={this.onChange} value={this.state.date} />;
  }
}

export default HomeCalendar;
