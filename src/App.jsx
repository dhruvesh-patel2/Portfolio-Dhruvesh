import React from 'react';
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import './styles/global.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
     
    </>
  );
}

export default App;
