import Link from "next/link";
import "./Footer.scss";

const liens = [
  { href: "https://www.malt.fr/profile/elodieorozcotaveira", label: "Malt", externe: true },
  { href: "https://www.linkedin.com/in/elodieorozcotaveira", label: "LinkedIn", externe: true },
  { href: "https://github.com/ElodieOrozcoTaveira", label: "GitHub", externe: true },
  { href: "/MentionsLegales", label: "Mentions légales" },
  { href: "/Confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link href="/" className="site-footer__brand">
          <span className="site-footer__logo" aria-hidden="true">
            EO
          </span>
          Elodie Orozco Taveira
        </Link>

        <nav aria-label="Liens du pied de page">
          <ul className="site-footer__links">
            {liens.map((lien) => (
              <li key={lien.label}>
                <Link
                  href={lien.href}
                  className="site-footer__link"
                  target={lien.externe ? "_blank" : undefined}
                  rel={lien.externe ? "noopener noreferrer" : undefined}
                >
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="site-footer__copy">
          © {new Date().getFullYear()} Elodie Orozco Taveira
        </p>
      </div>
    </footer>
  );
}
