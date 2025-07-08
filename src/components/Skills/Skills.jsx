import React from 'react';
import './Skills.scss';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import nairobiBg from '../../assets/backgrounds/nairobi.png';

const skillsData = [
  { name: 'HTML5', icon: <FaHtml5 className="skill-icon html" />, level: 5 },
  { name: 'CSS3', icon: <FaCss3Alt className="skill-icon css" />, level: 5 },
  { name: 'JavaScript', icon: <FaJs className="skill-icon js" />, level: 4.5 },
  { name: 'React', icon: <FaReact className="skill-icon react" />, level: 4 },
  { name: 'Vite', icon: <SiVite className="skill-icon vite" />, level: 3 },
  { name: 'GitHub', icon: <FaGithub className="skill-icon github" />, level: 4 },
];

const renderStars = (level) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= level) {
      stars.push(<FaStar key={i} color="#f7df1e" />);
    } else if (i - level === 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#f7df1e" />);
    } else {
      stars.push(<FaRegStar key={i} color="#f7df1e" />);
    }
  }
  return stars;
};

const Skills = () => {
  return (
    <section className="skills-section" style={{ backgroundImage: `url(${nairobiBg})` }}>
      <div className="skills-container">
        <h2>My Skills</h2>
        <p>Maîtrise des technologies web essentielles pour le développement d’applications modernes et performantes.</p>

        <div className="skills-list">
          {skillsData.map(({ name, icon, level }) => (
            <div key={name} className="skill-item">
              {icon}
              <span>{name}</span>
              <div className="skill-rating">{renderStars(level)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
