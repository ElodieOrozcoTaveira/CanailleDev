import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer/Footer";
import Fleche from "../Fleche/Fleche";
import "./LegalPage.scss";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated?: string;
  children: React.ReactNode;
};

// Gabarit commun aux pages Mentions légales et Confidentialité
export default function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: LegalPageProps) {
  return (
    <div className="legal-page">
      <section className="legal-page__hero">
        <div className="legal-page__hero-inner">
          <Link href="/" className="legal-page__back">
            <ArrowLeft size={18} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <p className="legal-page__eyebrow">{eyebrow}</p>
          <h1 className="legal-page__title">{title}</h1>
          {updated && (
            <p className="legal-page__updated">Dernière mise à jour : {updated}</p>
          )}
        </div>
      </section>

      <div className="legal-page__body">{children}</div>

      <Footer />
      <Fleche />
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal-page__section">
      <h2 className="legal-page__h2" data-no-animated-h2="true">
        {title}
      </h2>
      <div className="legal-page__text">{children}</div>
    </section>
  );
}
