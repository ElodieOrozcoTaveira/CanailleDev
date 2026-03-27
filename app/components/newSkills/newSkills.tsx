import "../newSkills/newSkills.scss";
import Image from "next/image";

export default function Skills() {
  const front = [
    {
      id: 1,
      icon: "https://skillicons.dev/icons?i=html",
      titre: "HTML",
      fonction: " Structure fondamentale et sémantique des pages web",
    },

    {
      id: 3,
      icon: "https://skillicons.dev/icons?i=sass",
      titre: "SCSS",
      fonction:
        "Stylisation avancée avec variables et imbrications réutilisables.",
    },

    {
      id: 4,
      icon: "https://skillicons.dev/icons?i=js",
      titre: "JavaScript",
      fonction: "Programmation logique pour des interfaces web interactives.",
    },

    {
      id: 5,
      icon: "https://skillicons.dev/icons?i=ts",
      titre: "TypeScript",
      fonction:
        "JavaScript sécurisé par un typage statique pour limiter les erreurs.",
    },

    {
      id: 6,
      icon: "https://skillicons.dev/icons?i=react",
      titre: "React",
      fonction: "Création d'interfaces modulaires basées sur des composants.",
    },

    {
      id: 7,
      icon: "https://skillicons.dev/icons?i=nextjs",
      titre: "NextJS",
      fonction:
        "Framework React optimisé pour le SEO et le rendu côté serveur.",
    },
    {
      id: 8,
      icon: "https://skillicons.dev/icons?i=angular",
      titre: "Angular",
      fonction: "Framework pour applications web complexes",
    },
  ];

  const back = [
    {
      id: 9,
      icon: "https://skillicons.dev/icons?i=nodejs",
      titre: "NodeJs",
      fonction: "Environnement d'exécution pour le JavaScript côté serveur.",
    },

    {
      id: 10,
      icon: "https://skillicons.dev/icons?i=express",
      titre: "ExpressJS",
      fonction: "Framework minimaliste pour la création d'API REST rapides.",
    },

    {
      id: 11,
      icon: "https://skillicons.dev/icons?i=sequelize",
      titre: "Sequelize",
      fonction:
        "ORM pour interagir avec la base de données via des objets JavaScript.",
    },

    {
      id: 12,
      icon: "https://skillicons.dev/icons?i=postgres",
      titre: "PostgreSQL",
      fonction:
        "Système de gestion de base de données relationnelle puissant et fiable.",
    },
    {
      id: 13,
      icon: "https://skillicons.dev/icons?i=php",
      titre: "PHP",
      fonction: "Développement web côté serveur.",
    },
  ];

  return (
    <>
      <section className="container-skills">
        <h2 className="container-skills__h2">Compétences Techniques</h2>
        <div className="container-skills__underline"></div>
        <p className="container-skills__p">
          Technologies que je maîtrise ou en cours d&apos;acquisition pour créer
          des applications web modernes
        </p>

        <section className="container-skills__secfront">
          <p className="container-skills__sectionTitle">Front-End</p>
          <div className="container-skills__Front">
            {front.map((skillfront) => (
              <div key={skillfront.id} className="container-skills__skillfront">
                <Image
                  className="container-skills__img"
                  alt={skillfront.icon}
                  src={skillfront.icon}
                  width={35}
                  height={35}
                />
                <p className="container-skills__title">{skillfront.titre}</p>
                <p className="container-skills__fonction">
                  {skillfront.fonction}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-skills__secback">
          <p className="container-skills__sectionTitle">Back-End</p>
          <div className="container-skills__back">
            {back.map((skillback) => (
              <div key={skillback.id} className="container-skills__skillback">
                <Image
                  className="container-skills__img"
                  alt={skillback.icon}
                  src={skillback.icon}
                  width={35}
                  height={35}
                />
                <p className="container-skills__title">{skillback.titre}</p>
                <p className="container-skills__fonction">
                  {skillback.fonction}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="competence-card">
          <div className="chips">
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Postgresql</span>
            <span className="chip">PHP</span>
            <span className="chip">TypeScript</span>
            <span className="chip">HTML/SCSS</span>

          </div>
        </div>
      </section>
    </>
  );
}
