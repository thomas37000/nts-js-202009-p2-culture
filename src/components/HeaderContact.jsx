import React from 'react';
import styled from 'styled-components';
import Logo from './categories/img/NantEvent.png';

const DIV = styled.div`
  background-color: navy;
  color: #f5f5f5;

  .title {
    height: 100px;
  }
  h1 {
    text-align: center;
  }
  .logo {
    display: flex;
    width: 100px;
    height: 95px;
    margin-left: 30px;
  }
`;
const HeaderContact = () => {
  return (
    <DIV>
      <div className="title">
        <img className="logo" src={Logo} alt="" />
      </div>
    </DIV>
  );
};

export default HeaderContact;
