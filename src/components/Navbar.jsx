import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Logo from './img/NantEvent.png';

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  background: linear-gradient(44deg, rgb(0, 135, 255), rgb(133, 249, 255));
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    width: 70px;
    height: 65px;
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
      <Link to="/">
        <img className="logo" src={Logo} alt="acceuil" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
