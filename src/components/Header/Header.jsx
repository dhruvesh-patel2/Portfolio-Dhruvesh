import React, { useState } from 'react';
import './Header.scss';

// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { id: 'about', title: 'À propos' },
  { id: 'projects', title: 'Projets' },
  { id: 'contact', title: 'Contact' },
];

const Header = () => {
  const [active, setActive] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    setActive(id);
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div
        className="header__logo"
        onClick={() => {
          setActive('');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        Dhruvesh
      </div>

      <nav className={`header__nav ${isOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map(({ id, title }) => (
            <li
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => handleClick(id)}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`header__burger ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
      </button>
    </header>
  );
};

export default Header;
