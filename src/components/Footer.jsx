import React from 'react';
import { Link } from 'react-router-dom';
import twitter from './img/twitter.png';
import instagram from './img/instagram.png';
import facebook from './img/facebook.png';
import FOOTER from './styledComponents/FooterStyle';

const Footer = () => {
  return (
    <div>
      <FOOTER>
        <footer className="Footer">
          <div className="footer-link">
            <span>
              <Link to="/diversite">Toute l&apos;année</Link>
            </span>
            <span>
              <Link to="/voyage">Voyage à Nantes</Link>
            </span>
            <span>
              <Link to="/animations">Animations estivales</Link>
            </span>
            <span>
              <Link to="/contact">Contact</Link>
            </span>
            <span>
              <a href="https://www.wildcodeschool.com/">Partenaires</a>
            </span>
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
