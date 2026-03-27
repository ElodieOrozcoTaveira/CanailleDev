import "../Footer/Footer.scss";
import Link from "next/link";
import { Linkedin, Github, Copyright } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <div className="container-footer">
        <section className="container-footer__canailledev">
          <Image
            className="container-footer__logo"
            src="/CanailleDev/newlogo.png"
            alt="logo canailledev"
            priority
            width={50}
            height={50}
            loading="eager"
          />
          <h3 className="container-footer__titre">CanailleDev</h3>
        </section>
        <h4 className="container-footer__h4">
          Développeuse Web Junior Front-End
        </h4>

        <section className="container-footer__navigation">
          <div className="container-footer__titrenav">Navigation</div>
          <div className="container-footer__docs">
            <Link className="container-footer__links" href="/MentionsLegales">
              Mentions Légales
            </Link>
            <Link className="container-footer__links" href="/Confidentialite">
              Politique de confidentialité
            </Link>
          </div>
        </section>

        <section className="container-footer__contact">
          <div className="container-footer__titrecontact">Contact</div>
          <div className="container-footer__tel">elorotav@gmail.com</div>
          <div className="container-footer__tel">06.40.67.55.87 </div>
        </section>

        <div className="container-footer__social">
          <a
            href="https://www.malt.fr/profile/elodieorozcotaveira"
            target="_blank"
            rel="noopener noreferrer"
            className="container-footer__social-link"
            aria-label="Profil Malt"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.1 13.5l-5.6 5.6c-1.4 1.4-3.6 1.4-4.9 0l-5.6-5.6c-1.4-1.4-1.4-3.6 0-4.9l5.6-5.6c1.4-1.4 3.6-1.4 4.9 0l5.6 5.6c1.4 1.4 1.4 3.6 0 4.9zm-6.6-6.6L9.4 11l4.1 4.1 4.1-4.1-4.1-4.1z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/elodieorozcotaveira"
            target="_blank"
            rel="noopener noreferrer"
            className="container-footer__social-link"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/ElodieOrozcoTaveira"
            target="_blank"
            rel="noopener noreferrer"
            className="container-footer__social-link"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
        </div>
        <h2 className="container-footer__h2">
          <Copyright size={14} />
          2026 CanailleDev - Tous droits réservés
        </h2>
      </div>
    </>
  );
}
