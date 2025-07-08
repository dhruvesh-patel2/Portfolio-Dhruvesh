import React from 'react';
import './Introduction.scss';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="content-wrapper">
        <div className="intro-text">
          <p className="intro-label">Introduction</p>
          <h2 className="intro-title">A propos de moi.</h2>
          <p className="intro-description">
            Je m'appelle Dhruvesh, je suis en formation pour devenir intégrateur web.
            Passionné par le développement front-end, j’apprends à créer des interfaces modernes, responsives et accessibles avec HTML, CSS, Sass, JavaScript et React.
            À travers ce portfolio, je vous présente mon univers, mes compétences, et les projets que j’ai réalisés.
            Mon objectif : transformer chaque maquette en expérience utilisateur fluide et soignée.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
