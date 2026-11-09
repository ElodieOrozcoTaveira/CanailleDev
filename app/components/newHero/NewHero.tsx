import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./newHero.scss";

export default function Hero() {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <Image
        src="/canigou-grand.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="home-hero__bg"
      />
      <div className="home-hero__overlay" aria-hidden="true"></div>

      <div className="home-hero__content">
        <p className="home-hero__badge">
          <span className="home-hero__dot" aria-hidden="true"></span>
          Disponible pour de nouveaux projets
        </p>

        <p className="home-hero__role">
          Conceptrice Développeuse d&apos;Applications (CDA) dans les{" "}
          {"Pyrénées‑Orientales"}
        </p>

        <h1 id="hero-title" className="home-hero__title">
          Des sites web qui ont du <span>relief</span>.
        </h1>

        <p className="home-hero__lead">
          Je suis Elodie Orozco Taveira. Je crée des sites et applications web
          sur mesure, performants et pensés pour vos utilisateurs.
        </p>

        <div className="home-hero__actions">
          <Link href="#contact" className="home-hero__primary">
            Démarrer un projet
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="#projets" className="home-hero__secondary">
            Voir mes projets
          </Link>
        </div>
      </div>

      <div className="home-hero__strip">
        <ul className="home-hero__facts">
          <li>Basée à Saint-Feliu d&apos;Avall (66)</li>
          <li>React · Next.js · TypeScript · Angular</li>
          <li>Sites vitrine · Applications web · E-commerce</li>
        </ul>
      </div>
    </section>
  );
}
