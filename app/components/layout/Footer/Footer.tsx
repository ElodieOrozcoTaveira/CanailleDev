import "../Footer/Footer.scss";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
    return(
        <>
        <div className="container-footer">
            <div className="container-footer__underline"></div>
            
            <div className="container-footer__social">
                <a 
                    href="https://www.malt.fr/profile/elodieorozcotaveira" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="container-footer__social-link"
                    aria-label="Profil Malt"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.1 13.5l-5.6 5.6c-1.4 1.4-3.6 1.4-4.9 0l-5.6-5.6c-1.4-1.4-1.4-3.6 0-4.9l5.6-5.6c1.4-1.4 3.6-1.4 4.9 0l5.6 5.6c1.4 1.4 1.4 3.6 0 4.9zm-6.6-6.6L9.4 11l4.1 4.1 4.1-4.1-4.1-4.1z"/>
                    </svg>
                </a>
                <a 
                    href="www.linkedin.com/in/elodieorozcotaveira"      
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="container-footer__social-link"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                </a>
                <a 
                    href="https://https://github.com/ElodieOrozcoTaveira" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="container-footer__social-link"
                    aria-label="GitHub"
                >
                    <Github size={24} />
                </a>
                
            </div>

            <h2 className="container-footer__h2">©️Copyright 2025 CanailleDev - Tous droits réservés</h2>
            
            <div className="container-footer__docs">
                <Link className="container-footer__links" href='/MentionsLegales'>Mentions Légales</Link>
                <Link className="container-footer__links" href='/Confidentialite'>Politique de confidentialité</Link>
            </div>
        </div>
        </>
    )
}