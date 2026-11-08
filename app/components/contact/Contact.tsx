"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
  type FormState = {
    nom: string;
    mail: string;
    message: string;
  };

  type StatusType = "idle" | "loading" | "success" | "error";

  const [formData, setFormData] = useState<FormState>({
    nom: "",
    mail: "",
    message: "",
  });

  const [status, setStatus] = useState<StatusType>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Validation de l'email
  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Nettoyage des inputs (enlève les balises HTML)
  const sanitizeInput = (input: string): string => {
    return input.trim().replace(/<[^>]*>/g, "");
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Réinitialiser le message d'erreur quand l'utilisateur modifie le formulaire
    if (status === "error") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    // Validation des champs
    if (!formData.nom || !formData.mail || !formData.message) {
      setStatusMessage("Veuillez remplir tous les champs");
      setStatus("error");
      return;
    }

    // Validation de l'email
    if (!validateEmail(formData.mail)) {
      setStatusMessage("Adresse email invalide");
      setStatus("error");
      return;
    }

    // Validation de la longueur
    if (formData.nom.length < 2) {
      setStatusMessage("Le nom doit contenir au moins 2 caractères");
      setStatus("error");
      return;
    }

    if (formData.message.length < 10) {
      setStatusMessage("Le message doit contenir au moins 10 caractères");
      setStatus("error");
      return;
    }

    try {
      // Utilisation des variables d'environnement Next.js
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Variables d'environnement EmailJS manquantes");
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: sanitizeInput(formData.nom),
          from_email: sanitizeInput(formData.mail),
          message: sanitizeInput(formData.message),
        },
        publicKey,
      );

      console.log("Email envoyé:", result);
      setStatusMessage("✅ Message envoyé avec succès !");
      setStatus("success");

      // Réinitialiser le formulaire après 2 secondes
      setTimeout(() => {
        setFormData({
          nom: "",
          mail: "",
          message: "",
        });
        setStatusMessage("");
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setStatusMessage("❌ Erreur lors de l'envoi. Veuillez réessayer.");
      setStatus("error");
    }
  };


  const isLoading = status === "loading";

  return (
    <section id="contact" className="home-contact" aria-labelledby="contact-title">
      <div className="home-contact__inner">
        <div className="home-contact__intro">
          <p className="home-contact__eyebrow">Contact</p>
          <h2 id="contact-title" className="home-contact__title">
            {"Un projet en tête ? Parlons-en."}
          </h2>
          <p className="home-contact__text">
            Projet web, collaboration ou simple échange : je serais ravie
            d&apos;en discuter avec vous, autour d&apos;un café ou d&apos;un
            verre.
          </p>
          <ul className="home-contact__infos">
            <li>
              <a href="mailto:elodie.orotav@hotmail.com" className="home-contact__info">
                <span className="home-contact__icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                elodie.orotav@hotmail.com
              </a>
            </li>
            <li className="home-contact__info">
              <span className="home-contact__icon" aria-hidden="true">
                <MapPin size={18} />
              </span>
              Saint-Feliu d&apos;Avall (66)
            </li>
          </ul>
        </div>

        <form className="home-contact__form" onSubmit={handleSubmit} noValidate>
          <h3 className="home-contact__form-title">Envoyez-moi un message</h3>

          <div className="home-contact__row">
            <label className="home-contact__field" htmlFor="nom">
              Nom
              <input
                type="text"
                id="nom"
                name="nom"
                className="home-contact__input"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={handleChange}
                maxLength={100}
                disabled={isLoading}
                autoComplete="name"
                required
              />
            </label>

            <label className="home-contact__field" htmlFor="mail">
              Email
              <input
                type="email"
                id="mail"
                name="mail"
                className="home-contact__input"
                placeholder="vous@exemple.fr"
                value={formData.mail}
                onChange={handleChange}
                maxLength={100}
                disabled={isLoading}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label className="home-contact__field" htmlFor="message">
            Votre projet
            <textarea
              id="message"
              name="message"
              className="home-contact__input home-contact__input--area"
              placeholder="Parlez-moi de votre projet"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              maxLength={1000}
              disabled={isLoading}
              required
            />
          </label>

          {/* Honeypot - Champ caché pour piéger les bots */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {statusMessage && (
            <p
              className={`home-contact__status home-contact__status--${status}`}
              role="alert"
            >
              {statusMessage}
            </p>
          )}

          <button
            type="submit"
            className="home-contact__submit"
            disabled={isLoading}
            aria-busy={isLoading}
          >
            {isLoading ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer le message
                <ArrowRight size={18} aria-hidden="true" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
