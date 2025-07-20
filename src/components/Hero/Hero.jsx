import React from 'react';
import './Hero.scss';
import profileImg from '../Images/dhruveshi.png';

function Hero() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1><span>Dhruvesh</span></h1>
          <p>
            Intégrateur Web & Développeur Front-End spécialisé dans la création d’interfaces modernes, performantes et accessibles.<br />
            Passionné par le code et le design, je crée des expériences utilisateurs fluides et innovantes.<br />
            <em>Découvrez mes projets et réalisations qui allient technique et créativité.</em>
          </p>
          <div className="hero-buttons">
            <button type="button" onClick={handleScrollToProjects}>
              Voir mes projets
            </button>
            <a
              href="/cvdhruvesh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cv"
            >
              Voir mon CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Dhruvesh" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
