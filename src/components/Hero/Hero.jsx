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
            Intégrateur Web & Développeur Front-End<br />
            Passionné par le code et le design moderne
          </p>
          <button type="button" onClick={handleScrollToProjects}>
            Voir mes projets
          </button>
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
