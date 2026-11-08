import Link from "next/link";
import { Check } from "lucide-react";
import "./NewPrestations.scss";

type Prestation = {
  titre: string;
  prix: string;
  inclus: string[];
  miseEnAvant?: boolean;
};

const prestations: Prestation[] = [
  {
    titre: "Site vitrine",
    prix: "1 500 €",
    inclus: [
      "1 à 5 pages, responsive",
      "Design personnalisé",
      "SEO de base",
      "Formulaire de contact",
      "Mise en ligne",
    ],
  },
  {
    titre: "Application web",
    prix: "3 000 €",
    inclus: [
      "Front-end moderne",
      "Back-end simple",
      "Animations douces",
      "Optimisation des performances",
      "Sécurité de base",
    ],
    miseEnAvant: true,
  },
  {
    titre: "E-commerce",
    prix: "2 500 €",
    inclus: ["Vente en ligne sur mesure", "Design personnalisé"],
  },
  {
    titre: "Refonte & maintenance",
    prix: "50 €/h",
    inclus: ["Amélioration de sites existants", "Correction de bugs"],
  },
];

export default function NewPrestations() {
  return (
    <section
      id="services"
      className="home-offers"
      aria-labelledby="offers-title"
    >
      <div className="home-offers__head">
        <div className="home-offers__heading">
          <p className="home-offers__eyebrow">Prestations</p>
          <h2 id="offers-title" className="home-offers__title">
            Ce que je peux faire pour vous.
          </h2>
        </div>
        <p className="home-offers__intro">
          Tarifs indicatifs. Chaque devis est adapté à votre projet.
        </p>
      </div>

      <div className="home-offers__grid">
        {prestations.map((offre) => (
          <article
            key={offre.titre}
            className={`home-offers__card${offre.miseEnAvant ? " home-offers__card--dark" : ""}`}
          >
            <h3 className="home-offers__name">{offre.titre}</h3>
            <p className="home-offers__price">
              <span className="home-offers__from">à partir de</span>
              {offre.prix}
            </p>
            <ul className="home-offers__list">
              {offre.inclus.map((item) => (
                <li key={item} className="home-offers__item">
                  <Check size={18} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className="home-offers__cta">
              Demander un devis
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
