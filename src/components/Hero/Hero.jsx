import React from 'react';
import './Hero.scss';
import profileImg from '../Images/dhruveshi.png';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1><span>Dhruvesh</span></h1>
          <p>Intégrateur Web & Développeur Front-End
          Passionné par le code et le design moderne</p>
          <button>Voir mes projets</button>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={profileImg} alt="Dhruvesh" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
