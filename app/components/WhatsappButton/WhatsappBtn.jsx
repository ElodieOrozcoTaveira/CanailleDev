import "../WhatsappButton/WhatsappBtn.scss";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/33640675587?text=Bonjour%20je%20souhaite%20discuter%20d'un%20projet"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <span className="whatsapp-button__tooltip">
        Discutons de votre projet
      </span>

      <MessageCircle size={26} strokeWidth={2.5} />
    </a>
  );
}