import React, { useState, useEffect } from 'react';
import './Projects.scss';
import cardsData from './cardsData';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // appel initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cardsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cardsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-section">
      <h2>Projets réalisés</h2>
      <p className="section-description">
        Une sélection de mes travaux en développement web, réalisés dans un contexte professionnel ou de formation.
      </p>

      <div className="slider">
        {cardsData.map((card, index) => {
          let className = 'card';

          const prevIndex = (activeIndex - 1 + cardsData.length) % cardsData.length;
          const nextIndex = (activeIndex + 1) % cardsData.length;

          if (index === activeIndex) {
            className += ' active';
          } else if (index === (isMobile ? nextIndex : prevIndex)) {
            className += ' left';
          } else if (index === (isMobile ? prevIndex : nextIndex)) {
            className += ' right';
          } else {
            className += ' hidden';
          }

          return (
            <a
              key={card.id}
              href={card.site}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
              style={{ backgroundImage: `url(${card.image})` }}
              aria-label={card.title}
            >
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a
                  href={card.github}
                  className="github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub size={20} title="Voir le code sur GitHub" />
                </a>
                <span className="neon-line"></span>
              </div>
            </a>
          );
        })}
      </div>

      <div className="nav-buttons">
        <button onClick={prevSlide} aria-label="Slide précédent">&#10094;</button>
        <button onClick={nextSlide} aria-label="Slide suivant">&#10095;</button>
      </div>
    </section>
  );
};

export default Projects;
