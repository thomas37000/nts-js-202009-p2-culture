import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #F2F2F2;
  border: 2px solid #000;
  padding: 1 rem;
  width: 100%;
  height: 50%; 
  display: flex;
  flex-direction column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 12px;



  .label-slider-price {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .slider{
    width: 80%;
  }
`;

class Slider extends React.Component {
  state = {
    value: 0
  }

  handleOnChange = (e) => this.setState({ value: e.target.value })
  
  render() {
    return (
      <Section>
        <div className="label-slider-price">
          <div>00 €</div>
          <div>10 €</div>
          <div>20 €</div>
          <div>30 €</div>
          <div>40 €</div>
          <div>Tous</div>
        </div>
        <input type="range" min={0} max={5} value={this.state.value} className="slider" onChange={this.handleOnChange} />
        {/*<div className='value'>{this.state.value}</div>*/}
      </Section>
    )
  };
}

export default Slider;