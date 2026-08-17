import React from 'react';

export default function Formations() {
  const departments = [
    // --- PARCOURS BTS ---
    {
      parcours: "PARCOURS BTS",
      title: "Sciences Économiques et de Gestion",
      intro: "Formations de techniciens supérieurs en gestion, informatique et commerce.",
      courses: [
        { name: "Assistant de Gestion PME/PMI", level: "BTS", desc: "Polyvalence administrative, comptable et commerciale pour seconder la direction.", price: "250 000" },
        { name: "Informatique de Gestion", level: "BTS", desc: "Gestion des systèmes d'information, réseaux et bases de données.", price: "250 000" },
        { name: "Comptabilité et Gestion des Entreprises", level: "BTS", desc: "Tenue comptable, contrôle de gestion et audit budgétaire.", price: "250 000" },
        { name: "Gestion des ressources humaines", level: "BTS", desc: "Recrutement, formation, paie et développement du personnel.", price: "250 000" }
      ]
    },
    {
      parcours: "PARCOURS BTS",
      title: "Sciences Administratives",
      intro: "Maîtrise des rouages administratifs, de la communication d'entreprise et de l'assistanat de direction.",
      courses: [
        { name: "Secrétariat de Direction", level: "BTS", desc: "Organisation administrative de haut niveau, communication exécutive et planification.", price: "250 000" },
        { name: "Communication des Entreprises", level: "BTS", desc: "Relations publiques, communication digitale, image de marque et stratégie média.", price: "250 000" },
        { name: "Assistant administratif", level: "BTS", desc: "Gestion des procédures administratives, rédaction officielle et coordination.", price: "250 000" }
      ]
    },
    {
      parcours: "PARCOURS BTS",
      title: "Sciences de l'Information Documentaire et de la Communication",
      intro: "Expertise en gestion du patrimoine documentaire, archivage légal et administration des bibliothèques.",
      courses: [
        { name: "Archives", level: "BTS", desc: "Conservation physique, classement légal et gestion électronique de documents (GED).", price: "350 000" },
        { name: "Documentation", level: "BTS", desc: "Recherche informationnelle, structuration des données et veille stratégique.", price: "350 000" },
        { name: "Bibliothéconomie", level: "BTS", desc: "Administration de bibliothèques, catalogage numérique et diffusion de l'information.", price: "350 000" }
      ]
    },
    {
      parcours: "PARCOURS BTS",
      title: "Sciences et Technologies",
      intro: "Formations techniques préparant aux métiers de l'ingénierie, de l'informatique et des réseaux.",
      courses: [
        { name: "Electronique", level: "BTS", desc: "Conception de circuits, automatismes industriels et maintenance électronique.", price: "275 000" },
        { name: "Electrotechnique", level: "BTS", desc: "Installations électriques, diagnostic et maintenance électrique.", price: "275 000" },
        { name: "Maintenance Informatique et Réseaux", level: "BTS", desc: "Administration de serveurs, architecture réseau, sécurité et maintenance hardware.", price: "275 000" },
        { name: "Développement d’Applications", level: "BTS", desc: "Programmation web et mobile, bases de données, génie logiciel et projets agiles.", price: "275 000" },
        { name: "Informatique industrielle", level: "BTS", desc: "Systèmes embarqués, programmation d'automates, robotique et contrôle de processus.", price: "275 000" }
      ]
    },

    // --- FORMATIONS CERTIFIANTES ---
    {
      parcours: "FORMATIONS CERTIFIANTES",
      title: "Sciences et Technologies",
      intro: "Programmes courts et sur mesure, orientés 100% pratique pour une acquisition de compétences ciblée.",
      courses: [
        { name: "Electronique", level: "Certifiante", desc: "Acquisition de compétences pratiques en électronique." },
        { name: "Electrotechnique", level: "Certifiante", desc: "Maintenance et installation de systèmes électrotechniques." }
      ]
    },
    {
      parcours: "FORMATIONS CERTIFIANTES",
      title: "Sciences Économiques et Administratives",
      intro: "Acquisition rapide de compétences opérationnelles en gestion et administration.",
      courses: [
        { name: "Gestion administrative", level: "Certifiante", desc: "Outils et méthodes pour la gestion administrative courante." },
        { name: "Gestion de projet", level: "Certifiante", desc: "Pilotage, planification et exécution de projets." },
        { name: "Secrétariat bureautique", level: "Certifiante", desc: "Maîtrise des logiciels de bureautique et accueil." },
        { name: "Comptabilité", level: "Certifiante", desc: "Saisie comptable, déclarations et suivi de trésorerie." },
        { name: "Communication et relation client", level: "Certifiante", desc: "Techniques de communication, vente et gestion de la clientèle." }
      ]
    },

    // --- PARCOURS LICENCE ---
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences et Technologies",
      intro: "Cursus avancés pour devenir ingénieur d'application dans les domaines technologiques.",
      courses: [
        { name: "Maintenance Informatique et réseaux", level: "Licence", desc: "Administration avancée, sécurité réseau et supervision.", price: "400 000" },
        { name: "Electrotechnique", level: "Licence", desc: "Conception et supervision d'installations électriques complexes.", price: "400 000" },
        { name: "Informatique Industrielle", level: "Licence", desc: "Automatisme avancé, robotique et systèmes cyber-physiques.", price: "400 000" },
        { name: "Electronique", level: "Licence", desc: "Ingénierie électronique et conception de cartes de circuits imprimés.", price: "400 000" },
        { name: "Développement d’application", level: "Licence", desc: "Architecture logicielle, cloud computing et frameworks modernes.", price: "400 000" },
        { name: "Architecture Métallique", level: "Licence", desc: "Conception, calcul, et dimensionnement de structures métalliques.", price: "400 000" }
      ]
    },
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences Agronomiques",
      intro: "Ingénierie agricole durable et élevage moderne pour répondre aux enjeux alimentaires.",
      courses: [
        { name: "Agrobusiness", level: "Licence", desc: "Gestion stratégique et économique d'exploitations agricoles.", price: "300 000" },
        { name: "Production Animale (Zootechnie)", level: "Licence", desc: "Techniques de pointe en élevage, génétique et nutrition animale.", price: "300 000" },
        { name: "Santé animale", level: "Licence", desc: "Prévention, diagnostic clinique et épidémiologie vétérinaire.", price: "300 000" },
        { name: "Production Végétale (Phytotechnie)", level: "Licence", desc: "Amélioration des cultures et ingénierie de la production végétale.", price: "300 000" }
      ]
    },
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences de l'Information Documentaire et de la Communication",
      intro: "Management supérieur de l'information et des archives à l'ère du numérique.",
      courses: [
        { name: "Archives", level: "Licence", desc: "Politiques d'archivage, GED et conservation préventive.", price: "400 000" },
        { name: "Documentation", level: "Licence", desc: "Veille stratégique, architecture de l'information et data management.", price: "400 000" },
        { name: "Bibliothéconomie", level: "Licence", desc: "Management de bibliothèques et médiation culturelle numérique.", price: "400 000" }
      ]
    },
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences Économiques et de Gestion",
      intro: "Formation de cadres intermédiaires en finance, gestion et ressources humaines.",
      courses: [
        { name: "Comptabilité, Contrôle et audit", level: "Licence", desc: "Expertise comptable, audit financier et contrôle de gestion approfondi.", price: "400 000" },
        { name: "Gestion des ressources humaines", level: "Licence", desc: "Management des RH, droit du travail et GPEC.", price: "400 000" },
        { name: "Finance, Banque et Assurance", level: "Licence", desc: "Ingénierie financière, marchés de capitaux et gestion des risques.", price: "400 000" },
        { name: "Transport et logistiques", level: "Licence", desc: "Supply chain management global et optimisation logistique.", price: "400 000" }
      ]
    },
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences Administratives",
      intro: "Expertise en management administratif et coordination de direction.",
      courses: [
        { name: "Assistant administratif", level: "Licence", desc: "Management des procédures administratives et pilotage d'équipe.", price: "400 000" }
      ]
    },
    {
      parcours: "PARCOURS LICENCE",
      title: "Sciences de la Vie et de la Terre",
      intro: "Étude, préservation et gestion durable de l'environnement et des écosystèmes.",
      courses: [
        { name: "Ecologie et environnement", level: "Licence", desc: "Études d'impact, gestion des milieux naturels et audit écologique.", price: "400 000" }
      ]
    }
  ];

  const handleEnrollClick = () => {
    alert("Pour postuler ou obtenir plus d'informations, veuillez vous rapprocher de notre secrétariat au campus de Kara (Quartier Tomdè) ou nous écrire à contact@institut-bakpessi.com.");
  };

  return (
    <main className="bg-gray-50/50 min-h-screen text-gray-800">
      {/* BANNIERE EN-TETE INSTITUTIONNELLE MARINE */}
      <section className="bg-marine text-white pt-20 pb-16 px-6 md:px-12 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <span className="text-or font-bold text-xs uppercase tracking-widest bg-or/10 border border-or/20 px-4 py-1.5 rounded-full inline-block mb-3">
            Nos Cursus
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Offre de Formation
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-normal">
            Des formations diplômantes en BTS (2 ans) et Licence professionnelle (3 ans), conçues pour allier rigueur académique, pratique professionnelle et insertion rapide sur le marché du travail.
          </p>
        </div>
      </section>

      {/* CATALOGUE SUR FOND CLAIR ET PROPRE */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-20">
        {departments.map((dept, dIdx) => (
          <div key={dIdx} className="scroll-mt-24">
            {/* En-tête du pôle */}
            <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-or font-bold text-xs uppercase tracking-widest block mb-1">
                  {dept.parcours || "Pôle Académique"}
                </span>
                <h2 className="font-serif italic text-2xl md:text-3xl font-bold text-marine tracking-tight">
                  {dept.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm max-w-md font-light leading-relaxed">
                {dept.intro}
              </p>
            </div>

            {/* Grille de cartes blanches avec hover marine */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.courses.map((course, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-6 md:p-7 rounded-2xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-or bg-or/10 group-hover:bg-or group-hover:text-black px-3 py-1 rounded-full transition-colors">
                        {course.level}
                      </span>
                      <i className="bx bx-check-circle text-or text-xl opacity-80 group-hover:scale-110 transition-transform"></i>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-marine group-hover:text-white mb-2 transition-colors leading-snug">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 group-hover:text-white/80 text-xs md:text-sm font-light leading-relaxed mb-6 transition-colors">
                      {course.desc}
                    </p>
                    
                    {/* Prices block */}
                    <div className="mt-auto flex flex-wrap gap-2 mb-6">
                      {course.price && (
                        <div className="bg-gray-50/50 border border-gray-100 group-hover:bg-white/10 group-hover:border-white/20 px-3 py-1.5 rounded-lg flex flex-col transition-colors">
                          <span className="text-[10px] text-gray-400 group-hover:text-white/60 uppercase font-semibold">Scolarité</span>
                          <span className="text-sm font-bold text-marine group-hover:text-or">{course.price} <span className="text-xs font-normal">FCFA</span></span>
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={handleEnrollClick}
                    className="text-xs font-bold text-marine group-hover:text-or flex items-center gap-1.5 transition-colors cursor-pointer !shadow-none self-start pt-4 border-t border-gray-100 group-hover:border-white/10 w-full justify-between"
                  >
                    <span>S'inscrire à ce cursus</span>
                    <i className="bx bx-right-arrow-alt text-lg"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SECTION ADMISSIONS SUR FOND BLANC */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24">
        <div className="bg-white border border-gray-200/80 p-8 md:p-10 rounded-2xl text-center">
          <h3 className="font-serif text-2xl font-bold text-marine mb-3">
            Modalités d'Admission & Inscription
          </h3>
          <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed mb-8">
            L'inscription s'effectue sur étude de dossier directement au secrétariat de notre campus à Kara (Quartier Tomdè). Notre administration vous accompagne pour un règlement échelonné et adapté de vos frais de scolarité.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-3xl mx-auto border-t border-gray-200/80 pt-8">
            <div className="flex items-start gap-3">
              <i className="bx bx-folder-open text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Dossier simple</strong>
                <span className="text-gray-500 text-xs font-light">Relevé BAC, naissance, nationalité et 2 photos.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bx bx-money text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Frais d'inscription</strong>
                <span className="text-gray-500 text-xs font-light block">BTS : <strong className="text-gray-700">20 000 FCFA</strong></span>
                <span className="text-gray-500 text-xs font-light block">Licence : <strong className="text-gray-700">30 000 FCFA</strong></span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bx bx-shield-quarter text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Couverture incluse</strong>
                <span className="text-gray-500 text-xs font-light">Assurance accident et suivi stage rigoureux.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleEnrollClick}
              className="bg-marine hover:bg-or hover:!text-black text-white font-bold px-6 py-3 rounded-xl !shadow-none transition-all duration-300 text-sm cursor-pointer"
            >
              Contacter le secrétariat
            </button>
            <a
              href="mailto:contact@institut-bakpessi.com"
              className="text-gray-600 hover:text-or text-sm font-light underline decoration-gray-300 hover:decoration-or transition-colors"
            >
              contact@institut-bakpessi.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
