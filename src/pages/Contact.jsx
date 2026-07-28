import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <main className="contact_page_wrapper">
      {/* PHOTO ENTREE ISMB */}
      <div className="entre_ismb">
        <img src="/images/contact_entrance.jpg" alt="Entrée ISMB Kara" />
      </div>

      <div className="contact_container">
        <div className="contact-info">
          <h1>Contactez-nous</h1>
          <p>
            Vous souhaitez en savoir plus sur nos programmes, les modalités d'inscription ou visiter notre campus ? N'hésitez pas à nous contacter ou à nous rendre visite.
          </p>

          <div className="info">
            <p>
              <strong>Adresse :</strong><br />
              L'Institut Supérieur Monseigneur BAKPESSI est situé au Quartier Tomdè, à côté de l’Évêché de Kara, Côté Ouest de Radio Maria, Kara (BP : 484).
            </p>
            <p>
              <strong>Téléphone :</strong><br />
              +228 22 60 81 32 / +228 72 89 66 02
            </p>
            <p>
              <strong>Email :</strong><br />
              contact@institut-bakpessi.com
            </p>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.0742071290806!2d1.195192476524866!3d9.54848301326099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102b8b6c53acd0c7%3A0xbd351b763e3d4126!2sISG%20Mgr%20BAKPESSI!5e0!3m2!1sfr!2stg!4v1749133016640!5m2!1sfr!2stg"
            title="Localisation ISMB Kara"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* FORMULAIRE DE CONTACT */}
      <div>
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Envoyez-nous un message</h2>

          {submitted && (
            <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '12px', borderRadius: '8px', marginBottom: '15px' }}>
              Merci ! Votre message a bien été envoyé. Notre équipe vous recontactera très prochainement.
            </div>
          )}

          <label htmlFor="name">Votre nom :</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            placeholder="Entrez votre nom complet"
          />

          <label htmlFor="email">Votre email :</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            placeholder="exemple@domaine.com"
          />

          <label htmlFor="message">Votre message :</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            placeholder="Écrivez votre message ici..."
          ></textarea>

          <button type="submit">Envoyer le message</button>
        </form>
      </div>
    </main>
  );
}
