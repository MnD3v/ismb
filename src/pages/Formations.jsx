import React from 'react';

export default function Formations() {
  const departments = [
    {
      title: "Sciences Économiques et de Gestion",
      intro: "Des cursus axés sur la maîtrise stratégique et opérationnelle des organisations, de la finance et du commerce.",
      courses: [
        { name: "Action Commerciale & Force de Vente", level: "BTS & Licence Pro", desc: "Négociation commerciale, stratégie marketing et gestion de portefeuille client." },
        { name: "Communication des Entreprises", level: "BTS & Licence Pro", desc: "Relations publiques, communication digitale, image de marque et stratégie média." },
        { name: "Banque Finance & Assurance", level: "BTS & Licence Pro", desc: "Gestion bancaire, analyse de risques financiers, patrimoine et produits d'assurance." },
        { name: "Comptabilité & Gestion des Entreprises", level: "BTS & Licence Pro", desc: "Tenue comptable, contrôle de gestion, audit budgétaire et gestion fiscale." },
        { name: "Commerce International", level: "BTS & Licence Pro", desc: "Procédures douanières, logistique internationale, fret et négociations globales." },
        { name: "Assistant de Gestion PME/PMI", level: "BTS & Licence Pro", desc: "Polyvalence administrative, comptable et commerciale pour seconder la direction." },
        { name: "Transport & Logistique", level: "BTS & Licence Pro", desc: "Gestion de la chaîne d'approvisionnement (Supply Chain), gestion de stocks et flotte." },
        { name: "Secrétariat de Direction", level: "BTS & Licence Pro", desc: "Organisation administrative de haut niveau, communication exécutive et planification." }
      ]
    },
    {
      title: "Sciences et Technologies",
      intro: "Formations techniques de pointe préparant aux métiers de l'ingénierie informatique, des réseaux et des systèmes embarqués.",
      courses: [
        { name: "Maintenance Informatique & Réseaux", level: "BTS & Licence Pro", desc: "Administration de serveurs, architecture réseau, sécurité et maintenance hardware." },
        { name: "Développement d'Applications", level: "BTS & Licence Pro", desc: "Programmation web et mobile, bases de données, génie logiciel et projets agiles." },
        { name: "Électronique & Électrotechnique", level: "BTS & Licence Pro", desc: "Conception de circuits, automatismes industriels, diagnostic et maintenance électrique." },
        { name: "Informatique Industrielle", level: "BTS & Licence Pro", desc: "Systèmes embarqués, programmation d'automates, robotique et contrôle de processus." }
      ]
    },
    {
      title: "Sciences de l'Administration",
      intro: "Maîtrise des rouages administratifs, juridiques et institutionnels pour les organisations publiques et privées.",
      courses: [
        { name: "Assistant Administratif", level: "BTS & Licence Pro", desc: "Gestion des procédures administratives, rédaction officielle et coordination des services." }
      ]
    },
    {
      title: "Sciences Agronomiques & de la Terre",
      intro: "Ingénierie agricole durable, élevage moderne et préservation des écosystèmes pour répondre aux enjeux de sécurité alimentaire.",
      courses: [
        { name: "Agrobusiness & Exploitation", level: "Licence Pro • 3 ans", desc: "Gestion économique et technique d'exploitations agricoles et commercialisation." },
        { name: "Zootechnie & Production Animale", level: "Licence Pro • 3 ans", desc: "Techniques modernes d'élevage, nutrition animale, sélection génétique et hygiène." },
        { name: "Phytotechnie & Production Végétale", level: "Licence Pro • 3 ans", desc: "Amélioration des cultures, protection des végétaux et gestion durable des sols." },
        { name: "Écologie & Environnement", level: "Licence Pro • 3 ans", desc: "Étude et préservation des écosystèmes, gestion des ressources et audit écologique." }
      ]
    },
    {
      title: "Information Documentaire & Communication",
      intro: "Expertise en gestion du patrimoine documentaire, archivage légal et administration des bibliothèques modernes.",
      courses: [
        { name: "Archives & Numérisation", level: "BTS & Licence Pro", desc: "Conservation physique, classement légal et gestion électronique de documents (GED)." },
        { name: "Bibliothéconomie & Médiation", level: "BTS & Licence Pro", desc: "Administration de bibliothèques, catalogage numérique et diffusion de l'information." },
        { name: "Documentation & Veille", level: "BTS & Licence Pro", desc: "Recherche informationnelle, structuration des données et veille stratégique." }
      ]
    },
    {
      title: "Formations Modulaires & à la Carte",
      intro: "Programmes courts (3 à 6 mois) ou sur mesure, orientés 100% pratique pour une acquisition de compétences rapide et ciblée.",
      courses: [
        { name: "Techniques de Production Animale", level: "Modulaire • 3 à 6 mois", desc: "Formation pratique et intensive pour lancer ou gérer un élevage commercial." },
        { name: "Techniques de Production Végétale", level: "Modulaire • 3 à 6 mois", desc: "Apprentissage sur le terrain des meilleures pratiques de culture et de récolte." },
        { name: "Gestion Pratique des Archives", level: "À la carte • Sur mesure", desc: "Module perfectionnement adapté aux professionnels et institutions." },
        { name: "Comptabilité & Logiciels de Gestion", level: "Modulaire • 3 mois", desc: "Maîtrise opérationnelle des logiciels comptables et de la tenue de caisse." }
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
                  Pôle Académique
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-marine tracking-tight">
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
                  <div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-2xl mx-auto border-t border-gray-200/80 pt-8">
            <div className="flex items-start gap-3">
              <i className="bx bx-folder-open text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Dossier simple</strong>
                <span className="text-gray-500 text-xs font-light">Relevé BAC, naissance, nationalité et 2 photos.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bx bx-shield-quarter text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Assurance incluse</strong>
                <span className="text-gray-500 text-xs font-light">Couverture accident pour chaque étudiant.</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <i className="bx bx-user-check text-or text-xl shrink-0 mt-0.5"></i>
              <div>
                <strong className="text-marine text-sm font-semibold block mb-0.5">Suivi stage</strong>
                <span className="text-gray-500 text-xs font-light">Accompagnement rigoureux vers l'emploi.</span>
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
