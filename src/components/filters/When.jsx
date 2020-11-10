import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  span {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 20%;
    height: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
  }
`;

class When extends React.Component {
  constructor(props) {
    super(props);
    this.handleToday = this.handleToday.bind(this);
  }

  handleToday() {
    // eslint-disable-next-line react/prop-types
    const { handleWhen } = this.props;
    handleWhen(new Date());
  }

  render() {
    return (
      <Section className="When">
        <button onClick={this.handleToday} type="button" className="today">
          Aujourd&apos;hui
        </button>
        <span className="in-day">Journée</span>
        <span className="in-evening">Soirée</span>
        <span className="w-e">Wee-end</span>
      </Section>
    );
  }
}

export default When;
