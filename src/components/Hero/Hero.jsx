import React from 'react';
import './Hero.scss';
import profileImg from '../Images/dhruveshpft.png';

const Hero = () => {

  const scrollToProjects = () => {
    const element = document.getElementById('projects'); // <-- ici 'projects' en anglais
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
          <span>Dhruvesh Patel</span>
        </h1>
        <p>
          Intégrateur Web & Développeur Front-End <br />
          Passionné par le code et le design moderne.
        </p>
        <button className="btn-projects" onClick={scrollToProjects}>
          Voir mes projets
        </button>
      </div>
      <div className="hero-image">
        <img src={profileImg} alt="Dhruvesh Patel" />
      </div>
    </section>
  );
};

export default Hero;
