import React from 'react';
import styled from 'styled-components';

const Slideburger = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 19;

  li {
    padding: 18px 10px;
    background-color: #0d2538;
    color: white;
    padding: 20px;
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: white;
      text-align: center;
    }
  } ;
`;

// eslint-disable-next-line react/prop-types
const RightNav = ({ open }) => {
  return (
    <Slideburger open={open}>
      <li>Accueil</li>
      <li>Calendrier</li>
      <li>Contact</li>
      <li>Reservation</li>
    </Slideburger>
  );
};

export default RightNav;
