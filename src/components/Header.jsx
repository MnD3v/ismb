import React, { useState } from 'react';

export default function Header({ activePage, setActivePage }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleNavClick = (pageName, sectionId = null) => {
    setActivePage(pageName);
    setIsNavOpen(false);
    setIsSubmenuOpen(false);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="logo">
        <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <img src="/images/logo_header.png" alt="Logo ISMB" style={{ width: '100%' }} />
        </a>
        <h4 style={{ color: 'white' }}>Institut Supérieur Monseigneur BAKPESSI</h4>
      </div>

      <nav id="menu" className={isNavOpen ? 'active' : ''}>
        <ul className="navigation">
          <li>
            <a 
              href="#" 
              className={activePage === 'home' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
            >
              Accueil
            </a>
          </li>
          <li className={`menu_formation ${isSubmenuOpen ? 'mobile-active' : ''}`}>
            <a 
              href="#" 
              className={activePage === 'formations' ? 'active' : ''} 
              onClick={(e) => {
                e.preventDefault();
                if (window.innerWidth <= 1024) {
                  setIsSubmenuOpen(!isSubmenuOpen);
                } else {
                  handleNavClick('formations');
                }
              }}
            >
              Nos formations ▾
            </a>
            <ul className="sous_menu">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('formations', 'total_formation_carte'); }}>
                  Formations à la carte
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('formations', 'formation_modulaire'); }}>
                  Formation modulaire
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('formations', 'bts_licence'); }}>
                  BTS et Licence
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a 
              href="#" 
              className={activePage === 'apropos' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('apropos'); }}
            >
              À propos
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={activePage === 'galerie' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('galerie'); }}
            >
              Galerie
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={activePage === 'contact' ? 'active' : ''} 
              onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            >
              Contacts
            </a>
          </li>
        </ul>
      </nav>

      <button 
        className={`menu_hamburger_box ${isNavOpen ? 'active' : ''}`} 
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Menu" 
        aria-expanded={isNavOpen}
      >
        <img src="/images/menu_humburger.png" alt="Icône du menu" className="menu_hamburger" />
      </button>
    </header>
  );
}
