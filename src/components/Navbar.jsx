import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from './categories/img/NantEvent.png';

const Nav = styled.nav`
  width: 100%;
  height: 100px;
  border-bottom: 2px solid ##f5f5f5;
  display: flex;
  background-color: navy;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    width: 100px;
    height: 100px;
    margin-left: 30px;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img className="logo" src={Logo} alt="" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
