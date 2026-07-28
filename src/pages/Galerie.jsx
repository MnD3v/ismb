import React from 'react';

export default function Galerie() {
  const gallerySections = [
    {
      title: "Campus & Vie Étudiante",
      subtitle: "Un cadre d'apprentissage moderne, sécurisé et convivial propice à l'épanouissement académique et personnel.",
      icon: "bx-building-house",
      images: [
        { src: '/images/gal_campus1.jpg', caption: "Infrastructures modernes du campus" },
        { src: '/images/gal_campus2.jpg', caption: "Échanges et travail en groupe" },
        { src: '/images/hero2.jpg', caption: "Espaces de vie et convivialité" }
      ]
    },
    {
      title: "Immersion & Stages en Agronomie",
      subtitle: "Travaux pratiques de nos étudiants en sciences agronomiques sur nos fermes expérimentales et parcelles agricoles.",
      icon: "bx-leaf",
      images: [
        { src: '/images/gal_agro1.jpg', caption: "Pratique sur parcelles expérimentales" },
        { src: '/images/gal_agro2.jpg', caption: "Analyses de sols et cultures" },
        { src: '/images/gal_agro3.jpg', caption: "Techniques de phytotechnie" },
        { src: '/images/gal_agro4.jpg', caption: "Ateliers de production végétale" },
        { src: '/images/gal_agro5.jpg', caption: "Suivi technique sur le terrain" },
        { src: '/images/gal_agro6.jpg', caption: "Récolte et évaluation agronomique" }
      ]
    },
    {
      title: "Visite du Musée de Pya - Archives & Doc",
      subtitle: "Sortie pédagogique des étudiants en Gestion des Archives et Documentation pour l'étude de la conservation du patrimoine.",
      icon: "bx-archive",
      images: [
        { src: '/images/gal_museum1.jpg', caption: "Étude des fonds d'archives historiques" },
        { src: '/images/gal_museum2.jpg', caption: "Observation des techniques de conservation" },
        { src: '/images/gal_museum3.jpg', caption: "Photo institutionnelle de la promotion" }
      ]
    },
    {
      title: "Activités Culturelles & Événements",
      subtitle: "La vie à l'ISMB est rythmée par des événements culturels, des journées d'intégration et des célébrations traditionnelles.",
      icon: "bx-music",
      images: [
        { src: '/images/gal_culture1.jpg', caption: "Journée d'intégration et animations" },
        { src: '/images/gal_culture2.jpg', caption: "Prestations artistiques étudiantes" },
        { src: '/images/gal_culture3.jpg', caption: "Célébration des valeurs traditionnelles" },
        { src: '/images/gal_culture4.jpg', caption: "Cohésion et esprit de promotion" },
        { src: '/images/gal_culture5.jpg', caption: "Échanges inter-filières" },
        { src: '/images/gal_culture6.jpg', caption: "Clôture de l'année académique" }
      ]
    }
  ];

  return (
    <main className="bg-gray-50/50 min-h-screen text-gray-800 pb-24">
      {/* BANNIÈRE EN-TÊTE INSTITUTIONNELLE MARINE */}
      <section className="bg-marine text-white pt-20 pb-16 px-6 md:px-12 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <span className="text-or font-bold text-xs uppercase tracking-widest bg-or/10 border border-or/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <i className="bx bxs-photo-album text-base"></i>
            <span>Immersion & Vie Étudiante</span>
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Galerie du Campus
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-normal">
            Découvrez en images le quotidien de nos étudiants : infrastructures modernes, travaux pratiques sur le terrain en agronomie, sorties pédagogiques et vie culturelle.
          </p>
        </div>
      </section>

      {/* CATALOGUE DES GALERIES THEMATIQUES */}
      <div className="space-y-16 py-16">
        {gallerySections.map((section, sIdx) => (
          <section key={sIdx} className="max-w-6xl mx-auto px-6 md:px-12 scroll-mt-24">
            {/* En-tête de section */}
            <div className="border-b border-gray-200 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-or font-bold text-xs uppercase tracking-widest flex items-center gap-1.5 mb-1">
                  <i className={`bx ${section.icon} text-base`}></i>
                  <span>Galerie Thématique</span>
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-marine tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-600 text-sm max-w-md font-light leading-relaxed">
                {section.subtitle}
              </p>
            </div>

            {/* Grille de photos en cartes blanches */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.images.map((imgItem, imgIdx) => (
                <div
                  key={imgIdx}
                  className="bg-white border border-gray-200/80 p-3 rounded-2xl shadow-sm hover:shadow-md hover:border-marine transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div className="rounded-xl overflow-hidden aspect-4/3 bg-gray-100 relative mb-3">
                    <img
                      src={imgItem.src}
                      alt={imgItem.caption}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="px-1 py-1 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-700 group-hover:text-marine transition-colors truncate">
                      {imgItem.caption}
                    </span>
                    <i className="bx bx-zoom-in text-gray-400 group-hover:text-or transition-colors text-base shrink-0 ml-2"></i>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
