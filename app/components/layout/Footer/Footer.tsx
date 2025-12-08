import "../Footer/Footer.scss";
import Link from "next/link";

export default function Footer() {
    return(
        <>
        <div className="container-footer">
            <div className="container-footer__underline"></div>
            <h2 className="container-footer__h2">©️​Copyright 2025 CanailleDev- Tous droits réservés</h2>
            <div className="container-footer__docs">
                <Link className="container-footer__links" href='/MentionsLegales'>Mentions Légales</Link>
                <Link className="container-footer__links" href='/Confidentialité'>Politique de confidentalité</Link>
            </div>
        </div>
        </>

    )
}