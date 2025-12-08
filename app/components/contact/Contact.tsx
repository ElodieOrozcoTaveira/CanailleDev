import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from '@emailjs/browser';
import "../contact/Contact.scss";

export default function Contact() {
  type FormState = {
    nom: string;
    mail: string;
    message: string;
  };

  const [formData, setFormData] = useState<FormState>({
    nom: "",
    mail: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    // Validation des champs avant
    if (!formData.nom || !formData.mail || !formData.message) {
      setStatusMessage("Veuillez remplir tous les champs");
      setIsLoading(false);
      return;
    }

    try {
      // Remplacez par vos identifiants EmailJS
      const result = await emailjs.send(
        'service_lzg3d1i',      // Votre Service ID
        'template_btb1mbs',     // Votre Template ID
        {
          nom: formData.nom,
          mail: formData.mail,
          message: formData.message,
        },
        'IY-7ZrOtyrijs0BH3'       // Votre Public Key
      );

      console.log('Email envoyé:', result);
      setStatusMessage("Message envoyé avec succès !");
      
      // Réinitialiser le formulaire
      setFormData({
        nom: "",
        mail: "",
        message: "",
      });
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setStatusMessage("Erreur lors de l'envoi. Réessayez.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-contact">
      <h2 className="container-contact__h2">Me contacter</h2>
      <div className="container-contact__underline"></div>

      <div className="container-contact__form">
        <form 
          className="container-contact__formulaire" 
          onSubmit={handleSubmit} //évite le rechargement de la page avec preventDefault()
        >
          <section className="container-contact__section">
            <input
              type="text"
              id="nom"
              className="container-contact__input"
              placeholder="Nom*"
              value={formData.nom}
              onChange={handleChange}
              name="nom"
              required
            />
            
            
            <input
              type="email"
              id="mail"
              className="container-contact__input"
              placeholder="Email*"
              value={formData.mail}
              name="mail"
              onChange={handleChange}
              required
            />
          </section>

          <section className="container-contact__message-section">
            <textarea //au lieu d'input, ce qui permet de pouvoir écrire dans toute la case correctement
              id="message"
              className="container-contact__messageview"
              placeholder="Sujet*"
              value={formData.message}
              name="message"
              onChange={handleChange}
              rows={5}
              required
            />
          </section>

          {statusMessage && (
            <p className="container-contact__status">{statusMessage}</p>
          )}

          <div className="container-contact__button">
            <button 
              type="submit"
              className="container-contact__envoyer"
              disabled={isLoading}
            >
              {isLoading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}