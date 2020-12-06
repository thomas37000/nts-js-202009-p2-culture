import React from 'react';
import { Link } from 'react-router-dom';
import Slideburger from '../styledComponents/RightNavStyle';
// import Logo from './img/NantEvent.png';

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/diversite/">Toute l&apos;année</Link>
      </li>
      <li>
        <Link to="/voyage/">Voyage à Nantes</Link>
      </li>
      <li>
        <Link to="/animations/">Animations estivales</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
