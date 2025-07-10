import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact'; 
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Contact /> {}
      </main>
      <Footer />
    </>
  );
}

export default App;
