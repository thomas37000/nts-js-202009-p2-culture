import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  border: solid navy 2px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
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
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
    color: #000000;
  }
  .slider {
    width: 80%;
    margin: 0;
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
    const { price } = this.state;
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
          value={price}
          className="slider"
          onChange={this.handleOnChange}
        />
      </Section>
    );
  }
}

Slider.propTypes = {
  changePrice: PropTypes.func.isRequired,
};
