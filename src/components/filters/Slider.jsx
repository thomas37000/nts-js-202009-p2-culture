import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  border: solid #006edc 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80vw;
  height: 10vh;
  margin: auto;

  .label-slider {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
  .slider {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`;

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '2',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(price) {
    const { changePrice } = this.props;
    this.setState({ price: price.target.value });
    changePrice(price.target.value);
  }

  render() {
    return (
      <Section>
        <div className="label-slider">
          <div>Gratuit</div>
          <div>Payant</div>
          <div>Tous</div>
        </div>
        <input
          type="range"
          min={0}
          max={2}
          value={this.state.price}
          className="slider"
          onChange={this.handleOnChange}
        />
      </Section>
    );
  }
}
