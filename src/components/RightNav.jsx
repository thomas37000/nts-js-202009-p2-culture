import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    background-color: #000080;
    color: #f5f5f5;
    padding: 20px;
  }

  a {
    color: #f5f5f5;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #000080;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 60vh;
    width: 300px;
    padding-top: 5.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #f5f5f5;
      text-align: center;
      border-bottom: 2px solid;
    }
    a {
      color: #f5f5f5;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open, id }) => {
  return (
    <Slideburger open={open}>
      <li>
        <Link to="/">Accueil</Link>
      </li>
      <li>
        <Link to={`/detail-event/${id}`}>Evènements</Link>
      </li>
      <li>
        <Link to="/calendrier">Calendrier</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </Slideburger>
  );
};

export default RightNav;
