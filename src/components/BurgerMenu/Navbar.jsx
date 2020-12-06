import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Nav from '../styledComponents/NavStyle';
// import Logo from './img/NantEvent.png';
import Logo from '../img/logo-nantes-event.png';

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <img className="logo" src={Logo} alt="" />
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
