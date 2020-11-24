import React from 'react';
import styled from 'styled-components';
import Slider from './Slider';
import HomeCalendar from './HomeCalendar';

const Section = styled.section`
  margin: 2rem auto;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
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


  .react-calendar {
    width: 80%;
    margin: auto;
    border-radius: 5px;
    border: solid #d8d8d8 2px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
  }
  .react-calendar__navigation {
    background: #d8d8d8;
  }

  .price-filter {
    margin-bottom: 5rem;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
    justify-content: space-around;
    align-items: flex-start;

    .react-calendar {
      width: 40vw;
    }
  }
`;
export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.changeDate = this.changeDate.bind(this);
    this.changePrice = this.changePrice.bind(this);
  }

  changeDate(date) {
    const { dateUpdate } = this.props;
    dateUpdate(date);
  }

  changePrice(price) {
    const { priceUpdate } = this.props;
    priceUpdate(price);
  }

  render() {
    return (
      <Section>
        <div className="calendar-filter">
          <h2>Filtre par date :</h2>
          <HomeCalendar changeDate={this.changeDate} />
        </div>
        <div className="price-filter">
          <h2>Filtre par prix :</h2>
          <Slider changePrice={this.changePrice} />
        </div>
      </Section>
    );
  }
}
