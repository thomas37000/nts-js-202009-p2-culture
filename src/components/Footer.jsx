import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';

const FOOTER = styled.div`
  .Footer {
    background-color: #000080;
    color: #f5f5f5;
    height: 11vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .Footer img {
    width: 25px;
    margin: 0 1rem;
  }
  .footer-link {
    display: flex;
    justify-content: space-around;
    margin: 0 1rem;
  }
  .footer-logo {
    display: flex;
    justify-content: space-around;
  }

  a {
    color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    .Footer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-end;
    }
    .footer-link {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 85%;
    }
    .footer-logo {
      margin: 10px;
      align-items: center;
    }
    .Footer img {
      margin-right: 10px;
      width: 35px;
    }
  }
`;

const Footer = () => {
  return (
    <div>
      <FOOTER>
        <footer className="Footer">
          <div className="footer-link">
            <span>
              <Link to="/contact">Contact</Link>
            </span>
            <a href="https://www.wildcodeschool.com/">Partenaires</a>
          </div>
          <div className="footer-logo">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </footer>
      </FOOTER>
    </div>
  );
};

export default Footer;
