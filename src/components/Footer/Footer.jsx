import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Dhruvesh Patel. Tous droits réservés.</p>
        <div className="footer__links">
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/dhruvesh-patel2?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
