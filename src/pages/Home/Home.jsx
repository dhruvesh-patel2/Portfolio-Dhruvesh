import React from 'react';
import Hero from '../../components/Hero/Hero';
import Introduction from '../../components/Introduction/Introduction';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

function Home() {
  return (
    <>
      <Hero />

      <section id="about" tabIndex="-1">
        <Introduction />
      </section>

      <Skills />

      <section id="projects" tabIndex="-1">
        <Projects />
      </section>
    </>
  );
}

export default Home;
