import Link from "next/link";
import { Check } from "lucide-react";
import "./NewPrestations.scss";

type Offre = {
  nom: string;
  type: string;
  prix: string;
  aPartirDe: boolean;
  pourQui: string;
  inclus: string[];
  badge?: string;
  miseEnAvant?: boolean;
};

const offres: Offre[] = [
  {
    nom: "Essentiel",
    type: "Site vitrine",
    prix: "450 €",
    aPartirDe: true,
    pourQui: "Pour les indépendants qui souhaitent être présents sur Internet.",
    inclus: [
      "Design responsive",
      "Présentation de l'activité",
      "Formulaire de contact",
      "Référencement naturel de base",
    ],
    badge: "Offre découverte",
  },
  {
    nom: "Professionnel",
    type: "Site complet",
    prix: "800 €",
    aPartirDe: true,
    pourQui:
      "Pour les entreprises qui veulent une véritable vitrine digitale.",
    inclus: [
      "Plusieurs pages personnalisées",
      "Galerie et réalisations",
      "Formulaires de contact",
      "Optimisation SEO de base",
      "Responsive mobile",
    ],
    miseEnAvant: true,
  },
  {
    nom: "Sur mesure",
    type: "Application web",
    prix: "Sur devis",
    aPartirDe: false,
    pourQui: "Pour les entreprises ayant des besoins spécifiques.",
    inclus: [
      "Comptes utilisateurs",
      "Gestion de données",
      "Tableaux de bord",
      "Fonctionnalités personnalisées",
      "Développement front-end et back-end",
    ],
  },
  {
    nom: "Refonte & maintenance",
    type: "Site existant",
    prix: "50 €/h",
    aPartirDe: true,
    pourQui: "Pour faire évoluer ou remettre en forme un site déjà en ligne.",
    inclus: ["Amélioration de sites existants", "Correction de bugs"],
  },
];

const grille = [
  { prestation: "Site vitrine one\u2011page", tarif: "450 – 650 €" },
  { prestation: "Site vitrine 4 à 5 pages", tarif: "800 – 1 200 €" },
  { prestation: "Site vitrine personnalisé", tarif: "1 300 – 1 800 €" },
  {
    prestation: "Site vitrine avancé / multi-activités",
    tarif: "1 800 – 2 500 €",
  },
  { prestation: "Site e-commerce", tarif: "À partir de 1 800 €" },
  { prestation: "Application web sur mesure", tarif: "Sur devis" },
  { prestation: "Refonte & maintenance", tarif: "50 €/h" },
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
          Les tarifs sont indicatifs : chaque projet fait l&apos;objet
          d&apos;un devis personnalisé, adapté à vos fonctionnalités, votre
          contenu et vos délais.
        </p>
      </div>

      <div className="home-offers__grid">
        {offres.map((offre) => (
          <article
            key={offre.nom}
            className={`home-offers__card${offre.miseEnAvant ? " home-offers__card--dark" : ""}`}
          >
            <div className="home-offers__top">
              <p className="home-offers__type">{offre.type}</p>
              {offre.badge && (
                <span className="home-offers__badge">{offre.badge}</span>
              )}
            </div>
            <h3 className="home-offers__name">{offre.nom}</h3>
            <p className="home-offers__price">
              {offre.aPartirDe && (
                <span className="home-offers__from">à partir de</span>
              )}
              {offre.prix}
            </p>
            <p className="home-offers__for">{offre.pourQui}</p>
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

      <div className="home-offers__table-wrap">
        <div className="home-offers__table-head">
          <h3 className="home-offers__table-title">Grille tarifaire indicative</h3>
          <p className="home-offers__table-note">
            Ces tarifs sont donnés à titre indicatif. Chaque projet fait
            l&apos;objet d&apos;un devis personnalisé, qui précise les
            fonctionnalités et le nombre de retours inclus.
          </p>
        </div>
        <table className="home-offers__table">
          <caption className="home-offers__sr-only">
            Grille tarifaire indicative
          </caption>
          <thead>
            <tr>
              <th scope="col">Prestation</th>
              <th scope="col">Tarif conseillé</th>
            </tr>
          </thead>
          <tbody>
            {grille.map((ligne) => (
              <tr key={ligne.prestation}>
                <th scope="row">{ligne.prestation}</th>
                <td>{ligne.tarif}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
