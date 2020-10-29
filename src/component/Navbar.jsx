import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import ImageNav from './Image Navbar/NanteEvent(2).png';
import Logo from './Image Navbar/logo.png';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .imagenav {
    padding: 0;
    width: 360px;
    margin: auto;
  }

  .logo {
    height: 100%;
    width: 7vw;
  }
  @media (max-width: 765px) {
    .logo {
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src={Logo} className="logo" alt="" />
      <img src={ImageNav} className="imagenav" alt="" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
