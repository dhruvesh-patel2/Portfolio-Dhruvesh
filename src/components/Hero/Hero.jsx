import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>
           {' '}
          <span>Dhruvesh Patel</span>
        </h1>
        <p>
          Intégrateur Web & Développeur Front-End <br />
          Passionné par le code et le design moderne.
        </p>
      </div>
    </section>
  );
};

export default Hero;
