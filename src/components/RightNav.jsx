import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './img/NantEvent.png';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    /* background-color: #000080; */
    color: #f5f5f5;
    padding: 20px;
  }

  a {
    color: blue;
    text-decoration: none;
    font-size: larger;
  }

  .logoBurger {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: linear-gradient(0deg, rgb(0, 135, 255), rgb(133, 249, 255));
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 40vh;
    width: 85%;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      text-align: center;
      /* border-bottom: 2px solid; */
    }
    a {
      color: #ffffff;
    }

    .logoBurger {
      display: block;
      width: 75px;
      height: 75px;
      margin: auto;
      border-radius: 50%;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <Link to="/">
        <img className="logoBurger" src={Logo} alt="acceuil" />
      </Link>
      {/* <li>
        <Link to="/bibliotheques">Bibliothèques / Médiathèques</Link>
      </li> */}
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
