import React from 'react';
import { Link } from 'react-router-dom';
import Slideburger from '../styledComponents/RightNavStyle';

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/diversite/">Toute l&apos;année</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
