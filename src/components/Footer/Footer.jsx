import React from 'react';
import './Footer.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} Dhruvesh Patel. Tous droits réservés.</p>
        <div className="footer__links">
          <a href="#about">À propos</a>
          <a href="#contact">Contact</a>
          <a
            href="https://github.com/dhruvesh-patel2?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {/* Lien CV avec icône FontAwesome */}
          <a
            href="/cvdhruvesh.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__cv-link"
            title="Voir mon CV"
          >
            <FontAwesomeIcon icon={faFilePdf} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
