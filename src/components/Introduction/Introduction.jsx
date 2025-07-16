import React from 'react';
import { Info } from 'lucide-react'; // ou tout autre icône moderne
import './Introduction.scss';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="content-wrapper">
        <div className="intro-text">
          <p className="intro-label">
            <Info size={16} style={{ marginRight: '6px' }} />
            Introduction
          </p>
          <h2 className="intro-title">À propos de moi</h2>
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
