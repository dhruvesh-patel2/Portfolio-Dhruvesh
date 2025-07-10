import React, { useEffect, useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.scss';

function Contact() {
  const [state, handleSubmit] = useForm("xldnqgea");
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      formRef.current?.reset();

      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <section className="contact-section" id="contact">
      <h2>Contact</h2>
      <p>Vous souhaitez me contacter pour un projet ou une collaboration ? Remplissez le formulaire ci-dessous.</p>

      <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Votre nom"
          required
        />
        <ValidationError prefix="Nom" field="name" errors={state.errors} />

        <input
          id="email"
          type="email"
          name="email"
          placeholder="Votre adresse email"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Votre message"
          required
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? 'Envoi en cours...' : 'Envoyer ✉️'}
        </button>

        {showSuccess && (
          <div className="success-toast">
            ✅ Message envoyé. Je vous répondrai dans les plus brefs délais.
          </div>
        )}
      </form>
    </section>
  );
}

export default Contact;
