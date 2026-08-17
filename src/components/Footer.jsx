import React from 'react';

export default function Footer({ setActivePage }) {
  const handleNavClick = (pageName) => {
    setActivePage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-marine text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Section Identité - 5 colonnes */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-or mb-4 tracking-tight">
              Institut Supérieur Mgr. BAKPESSI
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light max-w-sm mb-6">
              Établissement d'enseignement supérieur d'excellence, formant les leaders de demain en sciences de gestion, technologies informatiques, communication documentaire et agronomie durable.
            </p>
            
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/share/16Ac6cT6Aw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-or text-white hover:text-black border border-white/10 hover:border-or flex items-center justify-center text-xl transition-all duration-300 !shadow-none"
              >
                <i className="bx bxl-facebook"></i>
              </a>
              <a 
                href="https://vm.tiktok.com/ZMSBpNXnn/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-or text-white hover:text-black border border-white/10 hover:border-or flex items-center justify-center text-xl transition-all duration-300 !shadow-none"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
            </div>
          </div>

          {/* Section Liens rapides - 3 colonnes */}
          <div className="md:col-span-3">
            <h4 className="text-or font-semibold text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 font-light text-sm md:text-base">
              <li>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="text-white/80 hover:text-or transition-colors flex items-center gap-2 cursor-pointer group !shadow-none"
                >
                  <i className="bx bx-chevron-right text-or opacity-60 group-hover:translate-x-1 transition-all"></i>
                  <span>Accueil</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('formations')} 
                  className="text-white/80 hover:text-or transition-colors flex items-center gap-2 cursor-pointer group !shadow-none"
                >
                  <i className="bx bx-chevron-right text-or opacity-60 group-hover:translate-x-1 transition-all"></i>
                  <span>Formations</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('apropos')} 
                  className="text-white/80 hover:text-or transition-colors flex items-center gap-2 cursor-pointer group !shadow-none"
                >
                  <i className="bx bx-chevron-right text-or opacity-60 group-hover:translate-x-1 transition-all"></i>
                  <span>À propos</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('galerie')} 
                  className="text-white/80 hover:text-or transition-colors flex items-center gap-2 cursor-pointer group !shadow-none"
                >
                  <i className="bx bx-chevron-right text-or opacity-60 group-hover:translate-x-1 transition-all"></i>
                  <span>Galerie</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="text-white/80 hover:text-or transition-colors flex items-center gap-2 cursor-pointer group !shadow-none"
                >
                  <i className="bx bx-chevron-right text-or opacity-60 group-hover:translate-x-1 transition-all"></i>
                  <span>Contacts</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Section Coordonnées - 4 colonnes */}
          <div className="md:col-span-4">
            <h4 className="text-or font-semibold text-sm uppercase tracking-widest mb-6">
              Coordonnées
            </h4>
            <div className="space-y-4 text-sm md:text-base text-white/80 font-light">
              <div className="flex items-start gap-3">
                <i className="bx bx-map text-or text-xl shrink-0 mt-0.5"></i>
                <span className="leading-relaxed">
                  Quartier Tomdè, à côté de l’Évêché de Kara,<br />
                  Côté Ouest de Radio Maria<br />
                  Kara, Togo • BP : 484
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="bx bx-envelope text-or text-xl shrink-0"></i>
                <a 
                  href="mailto:contact@institut-bakpessi.com" 
                  className="hover:text-or transition-colors underline decoration-white/20 hover:decoration-or"
                >
                  contact@institut-bakpessi.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <i className="bx bx-phone text-or text-xl shrink-0"></i>
                <span>+228 72 89 66 02 / +228 22 60 81 32</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pied de page copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-white/60 font-light">
          <p>&copy; {new Date().getFullYear()} Institut Supérieur Monseigneur BAKPESSI. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Excellence Académique</span>
            <span className="hover:text-white transition-colors cursor-pointer">Kara, Togo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
