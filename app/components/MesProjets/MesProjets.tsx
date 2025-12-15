import "../MesProjets/MesProjets.scss";
import Image from "next/image";
import Link from "next/link";

export default function MesProjets() {
  const projets = [
    {
      id: 1,
      projet: "Les Chips de Nos Montagnes",
      image: "/Projets/lcdnm.webp",
      url: "https://www.leschipsdenosmontagnes.com/",
      privacy: "Projet Public",
    },
    {
      id: 2,
      projet: "Braap! - en cours..",
      image: "/Projets/braap.webp",
      url: "/404",
      privacy: "Projet Privé",
    },
    {
      id: 3,
      projet: "BlaBlaBook, Apothéose fin de formation",
      image: "/Projets/blablabook.webp",
      url: "/404",
      privacy: "Projet Privé",
    },
    {
      id: 4,
      projet: "OCoffee, projet de formation",
      image: "/Projets/ocoffee.webp",
      url: "/404",
      privacy: "Projet Privé",
    },
  ];

  return (
    <>
      <div className="container-projets">
        <h2 className="container-projets__h2">Mes Projets</h2>
        <div className="container-projets__underline"></div>
      </div>

      <div className="container-projets__grid">
        {projets.map((projects) => (
          <article key={projects.id} className="container-projets__article">
            <Link
              href={projects.url}
              target={projects.id === 1 ? "_blank" : undefined}
              rel={projects.id === 1 ? "noopener noreferrer" : undefined}
              className="container-projets__link"
            >
              <Image
                className="container-projets__img"
                src={projects.image}
                alt={projects.projet}
                priority
                width={220}
                height={180}
                loading="eager"
              />

              <h4 className="container-projets__h4">{projects.projet}</h4>
              <p className="container-projets__privacy">{projects.privacy}</p>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
