import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import Logo from './img/NantEvent.png';

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
    width: 55px;
    height: 55px;
    margin-left: 30px;
    border-radius: 50%;
  }

  @media (max-width: 765px) {
    .logo {
      display: flex;
    }
  }
`;

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    padding: 20px;
  }

  a {
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    color: #262a2d;
  }
  a:hover {
    color: #fff;
  }

  li:hover {
    background: #e15845;
  }

  .logoBurger {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: #262a2d;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 50vh;
    width: 85%;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      text-align: center;
    }
    a {
      color: #fff;
    }
    li:hover {
      background: #e15845;
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
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to="/bibliotheques">Bibliothèques / Médiathèques</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
