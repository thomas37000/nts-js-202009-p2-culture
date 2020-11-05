import React from 'react';
import './footer.css';
import twitter from './twitter.png';
import instagram from './instagram.png';
import facebook from './facebook.png';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-link">
        <span>Contact</span>
        <span>Mention légales</span>
        <span>Twitter</span>
      </div>
      <div className="footer-logo">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </div>
    </footer>
  );
};
export default Footer;
