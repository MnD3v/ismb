import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Formations from './pages/Formations';
import APropos from './pages/APropos';
import Galerie from './pages/Galerie';
import Contact from './pages/Contact';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'formations':
        return <Formations />;
      case 'apropos':
        return <APropos />;
      case 'galerie':
        return <Galerie />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-container">
      <Header activePage={activePage} setActivePage={setActivePage} />
      {renderPage()}
      <Footer setActivePage={setActivePage} />
      <ScrollToTop />
    </div>
  );
}

export default App;
