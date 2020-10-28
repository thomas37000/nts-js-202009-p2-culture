import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import ImageNav from './Image Navbar/NanteEvent(2).png';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;

  .imagenav {
    padding: 0;
    width: 360px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <img src={ImageNav} className="imagenav" alt="" />
      <Burger />
    </Nav>
  );
};

export default Navbar;
