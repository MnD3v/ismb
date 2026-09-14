import React, { useState, useEffect, useRef } from 'react';

export default function Home({ setActivePage }) {
  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img: '/images/hero1.jpg',
      badge: 'Excellence Académique',
      title: <i>Libérer le potentiel{'\n'}Favoriser l'excellence</i>,
      subtitle: 'Une formation supérieure de qualité guidée par des valeurs fortes et le sens de l’innovation.'
    },
    {
      img: '/images/hero2.jpg',
      badge: 'Leadership & Insertion',
      title: <i>Former les leaders{'\n'}de demain</i>,
      subtitle: 'Des programmes accrédités conçus sur-mesure pour booster votre carrière professionnelle.'
    },
    {
      img: '/images/hero3.jpg',
      badge: 'Campus Moderne',
      title: <i>Une vision moderne{'\n'}de l’apprentissage</i>,
      subtitle: 'Un cadre d’études stimulant avec équipements informatiques et laboratoires agronomiques de pointe.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Statistics Counter State
  const [studentsCount, setStudentsCount] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = 2000;
          const duration = 2000;
          const increment = Math.ceil(end / (duration / 16));
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setStudentsCount(end);
              clearInterval(timer);
            } else {
              setStudentsCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    return () => observer.disconnect();
  }, [hasAnimated]);

  // Testimonials Data
  const testimonials = [
    {
      text: `"Pour ma formation en sciences de l'information Documentaire et de la Communication, j'ai opté pour l'Institut Supérieur Mgr BAKPESSI. C'est un établissement d'enseignement supérieur prestigieux, avec des enseignants très professionnels permettant aux étudiants d'acquérir une expertise précieuse."`,
      name: 'OUTIMAYOR Anani',
      role: 'Archiviste à l\'OTR',
      image: '/images/temoignage1.jpg',
      position: 'center 15%',
      scale: 'scale-[1.7]'
    },
    {
      text: `"Mon passage à l'ISMB a été une expérience enrichissante. J'y ai acquis des compétences essentielles, bénéficié d'un encadrement de qualité et participé à des projets concrets. Une formation qui m'a préparé au monde professionnel!"`,
      name: 'BOTCHOLI Essozolam',
      role: 'Secrétaire au tribunal de Kara',
      image: '/images/temoignage2.jpg',
      position: 'center 20%',
      scale: 'scale-[1.6]'
    },
    {
      text: `"La rigueur technique et les équipements du laboratoire d'informatique m'ont permis de maîtriser rapidement l'administration des réseaux. Aujourd'hui, je gère les infrastructures techniques avec une parfaite assurance."`,
      name: 'KOUAMI Edem',
      role: 'Ingénieur Systèmes & Réseaux',
      image: '/images/apropos1.jpg',
      position: 'center',
      scale: 'scale-[1.2]'
    },
    {
      text: `"Grâce à la formation pratique en Sciences Agronomiques et aux projets sur le terrain, j'ai développé des compétences pointues en gestion d'exploitation durable. L'ISMB forme de véritables innovateurs agricoles !"`,
      name: 'TCHALLA Amina',
      role: 'Responsable de Production Agricole',
      image: '/images/apropos2.jpg',
      position: 'center',
      scale: 'scale-[1.2]'
    }
  ];

  const handleNavFormations = (sectionId = null) => {
    setActivePage('formations');
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
    <main>
      {/* HERO CARROUSEL PREMIUM */}
      <div className="hero_wrapper">
        <div id="carrouselExemple" className="carrousel">
          <div className="contenu-carrousel">
            {slides.map((slide, idx) => (
              <div 
                key={idx} 
                className={`element-carrousel ${idx === currentSlide ? 'actif' : ''}`}
              >
                <div className="hero_image_zoom">
                  <img src={slide.img} alt={`Slide ${idx + 1}`} />
                </div>
                <div className="hero_overlay_gradient"></div>
                <div className="debut">
                  <div className="devise_pill">
                    <img src="/images/graduation.png" alt="Graduation" />
                    <span>{slide.badge}</span>
                  </div>
                  <div className="phrase_accroche">
                    <h2 className="hero_title_animated" style={{ whiteSpace: 'pre-line' }}>
                      {slide.title}
                    </h2>
                    <p className="hero_subtitle_animated">
                      {slide.subtitle}
                    </p>
                    <div className="hero_actions">
                      <a 
                        href="#" 
                        className="lien_formation" 
                        onClick={(e) => { e.preventDefault(); handleNavFormations(); }}
                      >
                        <button className="button hero_btn_primary">
                          <span>Découvrir nos formations</span>
                          <i className="bx bx-right-arrow-alt hero_btn_icon"></i>
                        </button>
                      </a>
                      <a 
                        href="#" 
                        className="lien_formation" 
                        onClick={(e) => { e.preventDefault(); setActivePage('contact'); }}
                      >
                        <button className="button hero_btn_secondary">
                          <span>Nous contacter</span>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION A PROPOS DE L'INSTITUT - TAILWIND CSS V4 */}
      <section className="max-w-[1250px] mx-auto my-20 px-[5%]" id="conteneur_a_propos">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-transparent border border-or/50 text-marine px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-5">
            <i className="bx bxs-institution text-lg text-or"></i>
            <span>L'Excellence Universitaire au Togo</span>
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl leading-tight text-marine mb-5 font-bold">
            Former l'<span className="text-or">Élite Professionnelle</span> et Technologique de Demain
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            L'Institut Supérieur Monseigneur BAKPESSI (ISMB) allie rigueur académique et immersion en entreprise pour propulser les jeunes talents vers une carrière d'excellence.
          </p>
        </div>

        {/* Grille Bento Tailwind */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Bloc 1 : Image Immersive */}
          <div className="lg:col-span-7 relative min-h-[460px] rounded-2xl overflow-hidden shadow-xl group flex items-end p-8 bg-marine">
            <img src="/images/apropos1.jpg" alt="Campus ISMB et étudiants" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/40 to-transparent z-20"></div>
            <div className="relative z-30 bg-marine/80 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white w-full shadow-lg">
              <h4 className="font-serif text-2xl text-or font-bold mb-2">Feu Abozou K. BAKPESSI</h4>
              <p className="text-white/90 text-sm md:text-base leading-relaxed m-0">
                Fondé en 2004 par l'ancien Secrétaire Général de l'Université de Lomé avec la vision de décentraliser l'excellence universitaire dans le Nord-Togo.
              </p>
            </div>
          </div>

          {/* Bloc 2 & 3 : Colonne Droite */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Carte Marine */}
            <div className="bg-marine text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between flex-1 relative overflow-hidden group">
              <div>
                <h3 className="font-serif text-3xl text-or font-bold mb-3">L'Adéquation Emploi-Formation</h3>
                <p className="text-white/85 text-base leading-relaxed mb-6">
                  Nos cursus sont directement alignés sur les besoins réels du marché pour garantir une insertion professionnelle immédiate.
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-sm md:text-base font-medium">
                <li className="flex items-center gap-3 text-white"><i className="bx bxs-check-shield text-or text-xl"></i> Salles & Laboratoires informatiques high-tech</li>
                <li className="flex items-center gap-3 text-white"><i className="bx bxs-check-shield text-or text-xl"></i> Partenariats entreprises pour des stages garantis</li>
                <li className="flex items-center gap-3 text-white"><i className="bx bxs-check-shield text-or text-xl"></i> +75% à 100% de réussite aux examens d'État</li>
              </ul>
            </div>

            {/* Carte Or */}
            <div className="bg-or text-black p-8 rounded-2xl shadow-xl flex flex-col justify-center relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
              <div className="text-xs font-black uppercase tracking-widest text-black/80 mb-2 flex items-center gap-1.5">
                <i className="bx bxs-star text-base text-black"></i> Leadership National
              </div>
              <h3 className="font-serif text-3xl font-bold text-black leading-tight mb-2">1er Institut Privé</h3>
              <p className="text-black/90 font-semibold text-base m-0">
                Pionnier de l'enseignement supérieur privé à l'intérieur du Togo, établi à Tomdè (Kara).
              </p>
            </div>
          </div>
        </div>

        {/* Actions & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <span className="bg-white border border-gray-200 text-marine hover:bg-marine hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-none flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavFormations('agronomie'); }}>
              <i className="bx bx-leaf text-or text-lg"></i> Agronomie
            </span>
            <span className="bg-white border border-gray-200 text-marine hover:bg-marine hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-none flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavFormations('technologie'); }}>
              <i className="bx bx-laptop text-or text-lg"></i> Technologie & IA
            </span>
            <span className="bg-white border border-gray-200 text-marine hover:bg-marine hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-none flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavFormations('economie_gestion'); }}>
              <i className="bx bx-bar-chart-alt-2 text-or text-lg"></i> Sciences Éco & Management
            </span>
            <span className="bg-white border border-gray-200 text-marine hover:bg-marine hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer shadow-none flex items-center gap-2" onClick={(e) => { e.preventDefault(); handleNavFormations('droit'); }}>
              <i className="bx bx-shield-quarter text-or text-lg"></i> Droit Privé
            </span>
          </div>

          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleNavFormations(); }}
            className="no-underline"
          >
            <button className="bg-marine hover:bg-or hover:!text-black text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 flex items-center gap-3 cursor-pointer !shadow-none group">
              <span>Explorer nos filières & parcours</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover:translate-x-1"></i>
            </button>
          </a>
        </div>
      </section>

      {/* PARTIE STATISTIQUES */}
      <div className="statistiques" ref={statsRef}>
        <div className="stats" id="stats">
          <div className="div_1">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <h1>+{studentsCount}</h1>
            </div>
            <p>Étudiants formés</p>
          </div>

          <div className="div_2"></div>

          <div className="div_1">
            <h1>1ère</h1>
            <p>Université privée du nord Togo</p>
          </div>

          <div className="div_2"></div>

          <div className="div_1">
            <h1>+75%</h1>
            <p>de réussite post-diplôme</p>
          </div>
        </div>
      </div>

      {/* SECTION BENTO FORMATIONS - TAILWIND CSS V4 */}
      <section className="max-w-[1250px] mx-auto my-24 px-[5%]" id="categories_formations">
        {/* En-tête de la section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-transparent border border-or/50 text-marine px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-5">
            <i className="bx bxs-graduation text-lg text-or"></i>
            <span>Pôles d'Enseignement Supérieur</span>
          </div>
          <h2 className="font-serif italic text-4xl md:text-5xl leading-tight text-marine mb-5 font-bold">
            Nos Domaines d'Excellence & <span className="text-or">Filières Professionnelles</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Des cursus d'élite reconnus par l'État, alliant rigueur théorique et immersion pratique pour façonner les leaders et technologues de demain.
          </p>
        </div>

        {/* Grille Bento Unifiée et Harmonieuse (3 Colonnes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* 1. Sciences Économiques & Gestion */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-line-chart"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  BTS & Licence
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences Économiques et de Gestion
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Formation de pointe en économie, finance, gestion et commerce.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors max-h-52 overflow-y-auto pr-1">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span className="font-semibold text-or">Management des Entreprises (Kara & Lomé)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span className="font-semibold text-or">Communication & Marketing (Kara & Lomé)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Banque & Finance</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Commerce International</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Comptabilité & Gestion des Entreprises</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Transport - Logistique</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Informatique de Gestion</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Action Commerciale & Force de Vente</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Assurance</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Secrétariat de Direction</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Assistant de Gestion PME/PMI</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Communication des Entreprises</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('economie_gestion')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 2. Sciences Technologiques */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-chip"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  BTS & Licence
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences Technologiques
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Innovations technologiques, réseaux et ingénierie informatique de pointe.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span className="font-semibold text-or">Dév. Applications & IA (Kara & Lomé)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Maintenance Informatique & Réseaux</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Électronique</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Électrotechnique</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Informatique Industrielle</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('technologie')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 3. Sciences Juridiques & Politiques */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-shield-quarter"></i>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-2.5 py-1 rounded-full transition-colors">
                    Licence
                  </span>
                  <span className="text-[11px] font-bold text-marine group-hover:text-white bg-or/20 group-hover:bg-white/15 px-2 py-0.5 rounded-full border border-or/40">
                    Kara & Lomé
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences Juridiques & Droit
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Formation juridique d'élite aux carrières judiciaires, au barreau et au conseil d'entreprise.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Parcours d'excellence :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span className="font-semibold text-or">Droit Privé (Kara & Lomé)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Droit des Affaires & Contentieux</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Conseil Juridique d'Entreprise</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Carrières Judiciaires & Magistrature</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('droit')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 3. Sciences de l'Administration */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-building-house"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  BTS & Licence
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences de l'Administration
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Organisation administrative et gestion stratégique des directions.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Assistant Administratif</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Secrétariat de Direction</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Organisation Administrative</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Gestion des Services Généraux</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('administration')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 4. Sciences Agronomiques */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-leaf"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  Licence Pro
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences Agronomiques
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Techniques agricoles modernes et innovation pour une agriculture durable.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Phytotechnie (Production végétale)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Zootechnie (Production animale)</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Agrobusiness & Entrepreneuriat</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Santé Animale</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('agronomie')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 5. Sciences de la Vie et de la Terre */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-world"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  Licence Pro
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Sciences de la Vie & Terre
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Culture scientifique et gestion des enjeux environnementaux d'aujourd'hui.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Écologie & Environnement</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Gestion des Ressources Naturelles</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Analyse et Impacts Écologiques</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Développement Durable</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('vie_et_terre')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 6. Information Documentaire & Communication */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-broadcast"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  BTS & Licence
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Information & Communication
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Archivage moderne, gestion de bibliothèques et stratégies médias.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Filières disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Archives, Bibliothèque et Documentation</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Communication des Entreprises</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('documentation')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir le cursus</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 7. Formations à la Carte */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-customize"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  Sur-Mesure
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Formations à la carte
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Programmes à la demande adaptés aux entreprises, groupes et particuliers.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Domaines sur-mesure :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Production Animale & Végétale</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Archivage & Gestion Documentaire</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Renforcement de Compétences PME</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Formations Professionnelles Continues</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('total_formation_carte')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir l'offre</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>

          {/* 8. Formations Modulaires */}
          <div className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-2xl font-bold transition-colors">
                  <i className="bx bx-time-five"></i>
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                  3 à 6 mois
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-2 transition-colors">
                Formations modulaires
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed mb-4 transition-colors">
                Parcours courts, intensifs et personnalisés pour un perfectionnement ciblé.
              </p>

              {/* Liste explicite des filières */}
              <div className="my-4 pt-4 border-t border-gray-100 group-hover:border-white/15 transition-colors">
                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-or mb-3 flex items-center gap-1.5">
                  <i className="bx bx-collection text-base"></i>Modules disponibles :
                </div>
                <ul className="space-y-2 text-sm text-gray-600 group-hover:text-white/95 transition-colors">
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Certificats de Spécialisation Pratique</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Techniques Agricoles & d'Élevage</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Outils Informatiques & Numériques</span></li>
                  <li className="flex items-start gap-2"><i className="bx bx-check text-or text-lg shrink-0 mt-0.5"></i><span>Mise à Niveau Professionnelle Rapide</span></li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => handleNavFormations('formation_modulaire')} 
              className="mt-6 bg-gray-100 group-hover:bg-or text-marine group-hover:text-black font-semibold px-5 py-3.5 rounded-xl !shadow-none flex items-center justify-between w-full transition-all duration-300 cursor-pointer group/btn"
            >
              <span>Découvrir l'offre</span>
              <i className="bx bx-right-arrow-alt text-xl transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
            </button>
          </div>
        </div>
      </section>

      {/* TEMOIGNAGES DES ETUDIANTS - Simpliste et Propre */}
      <section className="bg-white text-marine py-24 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-transparent border border-or/50 text-marine px-5 py-2 rounded-full text-sm font-medium tracking-wider uppercase mb-5">
            <i className="bx bxs-quote-alt-left text-lg text-or"></i>
            <span>Parcours & Réussites</span>
          </div>
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-marine mb-4">
            Témoignages des Étudiants
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
            Découvrez les retours d'expérience de nos anciens diplômés sur leur cursus à l'ISMB et leur insertion dans le monde professionnel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 hover:bg-white border border-gray-200 hover:border-or/60 hover:shadow-xl p-6 md:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <i className="bx bxs-quote-alt-left text-or text-2xl mb-4 inline-block opacity-80 group-hover:scale-110 transition-transform duration-300"></i>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-light">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-or/80 shrink-0 relative flex items-center justify-center bg-gray-200">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={`w-full h-full object-cover ${item.scale || 'scale-100'}`}
                    style={{ objectPosition: item.position || 'center' }}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <strong className="text-marine font-bold text-sm md:text-base">{item.name}</strong>
                    <i className="bx bxs-badge-check text-or text-base" title="Diplômé certifié"></i>
                  </div>
                  <span className="text-or/90 text-xs font-medium block mt-0.5">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
