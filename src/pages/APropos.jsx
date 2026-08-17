import React from 'react';

export default function APropos() {
  const moyensData = [
    {
      icon: 'bx-desktop',
      title: 'Salles & Laboratoires équipés',
      desc: "Salles de classe climatisées, ateliers de travaux pratiques pour l'électrotechnique, salles informatiques high-tech et laboratoires agronomiques modernes pour un apprentissage 100% pratique."
    },
    {
      icon: 'bx-user-voice',
      title: "Équipe pédagogique d'excellence",
      desc: "Enseignants universitaires qualifiés et cadres professionnels expérimentés, engagés dans un encadrement rigoureux et un suivi personnalisé de chaque apprenant."
    },
    {
      icon: 'bx-wifi',
      title: 'Bibliothèque & Campus connecté',
      desc: "Bibliothèque physique et numérique richement dotée, couplée à une couverture Wi-Fi haut débit sur l'intégralité du campus à Kara pour faciliter la recherche."
    },
    {
      icon: 'bx-briefcase-alt-2',
      title: "Réseau d'entreprises & Stages",
      desc: "Partenariats institutionnels et privés solides garantissant l'accès à des stages de qualification et à de réelles opportunités d'emploi dès l'obtention du diplôme."
    }
  ];

  const valeursData = [
    {
      icon: 'bx-shield-quarter',
      title: 'Foi & Confiance',
      desc: "La conviction profonde en notre mission éducative et la confiance inébranlable en le potentiel exceptionnel de chaque étudiant qui franchit les portes de notre institut."
    },
    {
      icon: 'bx-target-lock',
      title: 'Persévérance',
      desc: "L'effort continu, la rigueur intellectuelle, la discipline morale et la volonté constante de se surpasser face aux exigences académiques et aux défis du monde professionnel."
    },
    {
      icon: 'bxs-award',
      title: 'Succès & Excellence',
      desc: "L'aboutissement ultime de notre exigence : des taux de réussite records aux examens d'État et une insertion professionnelle rapide, durable et exemplaire."
    }
  ];

  return (
    <main className="bg-gray-50/50 min-h-screen text-gray-800 pb-24">
      {/* BANNIÈRE EN-TÊTE INSTITUTIONNELLE MARINE */}
      <section className="bg-marine text-white pt-20 pb-16 px-6 md:px-12 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <span className="text-or font-medium text-xs uppercase tracking-widest bg-transparent border border-or/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
            <i className="bx bxs-award text-base"></i>
            <span>Excellence depuis 2004</span>
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            À Propos de l'ISMB
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-normal">
            Premier institut privé d'enseignement supérieur au Nord-Togo, formant depuis plus de deux décennies les leaders, gestionnaires et ingénieurs de demain.
          </p>
        </div>
      </section>

      {/* SECTION NOTRE MISSION & VISION */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16">
        <div className="bg-white border border-gray-200/80 p-8 md:p-12 rounded-3xl text-center shadow-sm">
          <span className="text-or font-bold text-xs uppercase tracking-widest block mb-2">
            Notre Vocation
          </span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-marine mb-6">
            L'Excellence au Service de l'Avenir
          </h2>
          <p className="text-marine font-semibold text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
            Vous fournir les compétences techniques, académiques et humaines nécessaires pour réussir votre insertion professionnelle et évoluer dans un environnement économique en constante mutation.
          </p>
          <p className="text-gray-600 font-light text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Créer un environnement d'apprentissage stimulant, où chaque étudiant peut développer son potentiel et acquérir la maîtrise technique et managériale pour s'épanouir professionnellement. Nous plaçons l'adéquation <strong className="text-marine font-semibold">emploi-formation</strong> au cœur de notre démarche pédagogique, afin de garantir la compétitivité de nos diplômés sur le marché national et international.
          </p>
        </div>
      </section>

      {/* SECTION QUI SOMMES NOUS ? (HISTOIRE & FONDATEUR) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Colonne Gauche : Histoire */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-or font-bold text-xs uppercase tracking-widest block mb-1">
                Notre Histoire
              </span>
              <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-marine tracking-tight mb-6">
                Qui Sommes-Nous ?
              </h2>
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Fondé en <strong className="text-marine font-semibold">2004</strong>, l’Institut Supérieur Mgr. BAKPESSI (ISMB) incarne les idéaux d’un homme visionnaire qui a œuvré pour la décentralisation de l’enseignement supérieur au Nord-Togo. Son credo : rapprocher les études universitaires de haut niveau des populations de l’arrière-pays togolais, dont la majorité des jeunes bacheliers devaient parcourir des centaines de kilomètres pour étudier à Lomé.
            </p>

            <div className="border-l-4 border-or bg-or/5 p-6 rounded-r-2xl text-marine font-serif italic text-base md:text-lg leading-relaxed">
              « Rapprocher l'enseignement de haut niveau de la jeunesse du Nord-Togo pour créer un développement durable et inclusif. »
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Premier institut privé de formation du supérieur à l’intérieur du Togo, l’IS Mgr BAKPESSI a été créé par <strong className="text-marine font-semibold">Feu Abozou K. BAKPESSI</strong>, haut fonctionnaire de la Communauté Économique des États de l’Afrique de l’Ouest (CEDEAO) et ancien Secrétaire Général de l’Université du Bénin (aujourd’hui Université de Lomé).
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">
              Agrégé sous l’égide du Ministère de l’Enseignement Supérieur et de la Recherche du TOGO, l'ISMB met à la disposition des entreprises et des administrations des cadres compétents, dynamiques et intègres. Nos résultats aux examens d'État dépassent régulièrement la barre des <strong className="text-or font-bold">75%</strong>, atteignant à plusieurs reprises <strong className="text-or font-bold">100% de réussite</strong>.
            </p>
          </div>

          {/* Colonne Droite : Images & Fondateur */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-200/80 aspect-video lg:aspect-4/3 relative group bg-white">
              <img
                src="/images/apropos1.jpg"
                alt="Campus ISMB et étudiants"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="bg-marine text-white p-7 rounded-3xl shadow-sm border border-white/10 relative overflow-hidden group">
              <div className="w-12 h-12 rounded-2xl bg-or/20 border border-or/30 flex items-center justify-center text-or text-2xl mb-4">
                <i className="bx bxs-user-detail"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">
                Feu Abozou K. BAKPESSI
              </h3>
              <p className="text-or font-semibold text-sm mb-3">
                Fondateur & Visionnaire (2004)
              </p>
              <p className="text-white/70 text-xs font-light leading-relaxed">
                Ancien Secrétaire Général de l'Université de Lomé et haut fonctionnaire de la CEDEAO, dévoué à l'émancipation intellectuelle et professionnelle de la jeunesse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NOS MOYENS PEDAGOGIQUES (BENTO GRID 2x2) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-or font-bold text-xs uppercase tracking-widest block mb-1">
            Infrastructures & Encadrement
          </span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-marine tracking-tight mb-3">
            Nos Moyens Pédagogiques
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light">
            Des infrastructures modernes, un équipement technologique de pointe et un encadrement d'excellence pour des conditions d'études optimales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moyensData.map((moyen, mIdx) => (
            <div
              key={mIdx}
              className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-7 md:p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-marine/10 group-hover:bg-or/20 flex items-center justify-center text-marine group-hover:text-or text-3xl mb-6 transition-colors">
                  <i className={`bx ${moyen.icon}`}></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-3 transition-colors leading-snug">
                  {moyen.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm font-light leading-relaxed transition-colors">
                  {moyen.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION NOS VALEURS FONDAMENTALES (GRILLE 3 COLONNES ZERO EMOJI) */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-or font-bold text-xs uppercase tracking-widest block mb-1">
            L'Esprit ISMB
          </span>
          <h2 className="font-serif italic text-3xl md:text-4xl font-bold text-marine tracking-tight mb-3">
            Nos Valeurs Fondamentales
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-light">
            Les trois piliers inébranlables qui guident notre enseignement et forgent l'identité professionnelle de nos diplômés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valeursData.map((valeur, vIdx) => (
            <div
              key={vIdx}
              className="bg-white hover:bg-marine text-gray-800 hover:text-white border border-gray-200/80 hover:border-marine p-8 rounded-3xl text-center transition-all duration-300 flex flex-col items-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-or/10 group-hover:bg-or/20 border border-or/20 flex items-center justify-center text-or text-3xl mb-6 transition-colors">
                <i className={`bx ${valeur.icon}`}></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-marine group-hover:text-white mb-3 transition-colors">
                {valeur.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm font-light leading-relaxed transition-colors">
                {valeur.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
