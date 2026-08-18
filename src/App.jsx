import React, { useState, useEffect } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // Check for all images in the document
      const images = Array.from(document.images);
      
      if (images.length === 0) {
        setTimeout(() => setIsLoading(false), 800);
        return;
      }

      let loadedCount = 0;
      const checkDone = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setTimeout(() => setIsLoading(false), 800);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          checkDone();
        } else {
          img.addEventListener('load', checkDone, { once: true });
          img.addEventListener('error', checkDone, { once: true });
        }
      });
    };

    // Wait a brief moment to allow initial React render to populate the DOM with images
    const timer = setTimeout(() => {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
      }
    }, 100);

    // Fallback just in case some images never fire load/error events
    const fallbackTimer = setTimeout(() => setIsLoading(false), 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

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
    <>
      {/* Loader qui attend le chargement des images */}
      <div className={`app-loader ${!isLoading ? 'hidden' : ''}`}>
        <div className="circular-loader"></div>
      </div>

      <div className="app-container">
        <Header activePage={activePage} setActivePage={setActivePage} />
        {renderPage()}
        <Footer setActivePage={setActivePage} />
        <ScrollToTop />
      </div>
    </>
  );
}

export default App;
