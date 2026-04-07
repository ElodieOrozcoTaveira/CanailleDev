"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import "../contact/Contact.scss";
import { Beer, Coffee, MailIcon, MapPin, Send, Smile } from "lucide-react";

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

  return (
    <div className="container-contact">
      <h2 className="container-contact__h2">Contactez-moi</h2>
      <h3 className="container-contact__underline"></h3>
      <p className="container-contact__phrase">
        Un projet en tête? N&apos;hésitez pas à me contacter pour en disctuer
      </p>
      <p className="container-contact__travail">Travaillons ensemble</p>
      <p className="container-contact__paragraph">
        Que ce soit pour un projet web, une collaboration ou simplement
        échanger, je serais ravie de discuter avec vous autour d&apos;un verre
        <Beer color="#1f3d2b" size={15} />
        <Coffee color="#1f3d2b" size={15} />
        <Smile color="#1f3d2b" size={15} />
      </p>

      <section className="container-contact__contact">
        <div className="container-contact__composant">
          <div className="container-contact__logo">
            <MailIcon color="rgb(12, 188, 15)" size={18} />
          </div>
          <div className="container-contact__mail">elorotav@gmail.com</div>
        </div>
        <div className="container-contact__composant">
          <div className="container-contact__logo">
            <MapPin color="rgb(12, 188, 15)" size={18} />{" "}
          </div>
          <div className="container-contact__mail">
            Saint-Feliu d&apos;Avall (66)
          </div>
        </div>
      </section>

      <div className="container-contact__form">
        <h3 className="container-contact__formh2">Envoyez moi un message</h3>
        <h3 className="container-contact__formh3">
          Remplissez le formulaire ci-dessous et je vous répondrai rapidement
        </h3>
        <form className="container-contact__formulaire" onSubmit={handleSubmit}>
          <section className="container-contact__section">
            <input
              type="text"
              id="nom"
              className="container-contact__input"
              placeholder="Nom*"
              value={formData.nom}
              onChange={handleChange}
              name="nom"
              maxLength={100}
              disabled={status === "loading"}
              required
              aria-label="Nom"
            />

            <input
              type="email"
              id="mail"
              className="container-contact__input"
              placeholder="Email*"
              value={formData.mail}
              name="mail"
              onChange={handleChange}
              maxLength={100}
              disabled={status === "loading"}
              required
              aria-label="Email"
            />
          </section>

          <section className="container-contact__message-section">
            <textarea
              id="message"
              className="container-contact__messageview"
              placeholder="Parlez moi de votre projet*"
              value={formData.message}
              name="message"
              onChange={handleChange}
              rows={5}
              maxLength={1000}
              disabled={status === "loading"}
              required
              aria-label="Message"
            />
          </section>

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
              className={`container-contact__status ${
                status === "success"
                  ? "container-contact__status--success"
                  : status === "error"
                    ? "container-contact__status--error"
                    : ""
              }`}
              role="alert"
            >
              {statusMessage}
            </p>
          )}

          <div className="container-contact__button">
            <button
              type="submit"
              className="container-contact__envoyer"
              disabled={status === "loading"}
              aria-busy={status === "loading"}
            >
              {status === "loading" ? (
                "Envoi en cours..."
              ) : (
                <>
                  <Send size={18} aria-hidden="true" />
                  <span>Envoyer le message</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
