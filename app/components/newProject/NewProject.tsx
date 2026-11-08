import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import "./NewProject.scss";

type Projet = {
  titre: string;
  type: string;
  statut?: string;
  description: string;
  image: string;
  url: string;
  externe?: boolean;
  // Carte mise en avant, sur toute la largeur
  vedette?: boolean;
};

const projets: Projet[] = [
  {
    titre: "66partners",
    type: "Application mobile",
    description:
      "Application de recherche de partenaires sportifs, lancée dans les Pyrénées-Orientales puis étendue à toute l'Occitanie.",
    image: "/66Partners/logo.png",
    url: "https://66partners.fr",
    externe: true,
    vedette: true,
  },
  {
    titre: "Les Chips de Nos Montagnes",
    type: "Site web",
    statut: "Projet client",
    description:
      "Site vitrine pour une marque artisanale de chips des Pyrénées.",
    image: "/Projets/lcdnm.webp",
    url: "https://www.leschipsdenosmontagnes.com/",
    externe: true,
  },
  {
    titre: "Braap!",
    type: "Application mobile",
    statut: "En cours",
    description: "Application mobile en cours de développement.",
    image: "/Projets/braap.png",
    url: "/Braap",
  },
  {
    titre: "BlaBlaBook",
    type: "Projet formation",
    statut: "Projet privé",
    description: "Application web de gestion de bibliothèque personnelle.",
    image: "/Projets/BBB.webp",
    url: "/BBB",
  },
  {
    titre: "Nana's Coffee",
    type: "WordPress",
    statut: "Projet personnel",
    description: "Site WordPress pour un coffee shop.",
    image: "/Projets/logo.png",
    url: "/NanasCoffee",
  },
];

export default function NewProject() {
  return (
    <section id="projets" className="home-work" aria-labelledby="work-title">
      <div className="home-work__inner">
        <div className="home-work__head">
          <div className="home-work__heading">
            <p className="home-work__eyebrow">Réalisations</p>
            <h2 id="work-title" className="home-work__title">
              Projets sélectionnés
            </h2>
          </div>
          <p className="home-work__intro">
            Sites clients, applications et projets de formation, du design à la
            mise en ligne.
          </p>
        </div>

        <ul className="home-work__grid">
          {projets.map((projet) => (
            <li
              key={projet.titre}
              className={projet.vedette ? "home-work__featured" : undefined}
            >
              <Link
                href={projet.url}
                className={`home-work__card${projet.vedette ? " home-work__card--featured" : ""}`}
                target={projet.externe ? "_blank" : undefined}
                rel={projet.externe ? "noopener noreferrer" : undefined}
              >
                <div className="home-work__media">
                  <Image
                    src={projet.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="home-work__img"
                  />
                </div>
                <div className="home-work__body">
                  <div className="home-work__tags">
                    <span className="home-work__tag">{projet.type}</span>
                    {projet.statut && (
                      <span className="home-work__tag home-work__tag--outline">
                        {projet.statut}
                      </span>
                    )}
                  </div>
                  <div className="home-work__row">
                    <h3 className="home-work__name">{projet.titre}</h3>
                    <ArrowUpRight
                      className="home-work__arrow"
                      size={22}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="home-work__desc">{projet.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
