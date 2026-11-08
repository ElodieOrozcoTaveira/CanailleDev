import "./newSkills.scss";

type Skill = { nom: string; description: string };

const front: Skill[] = [
  { nom: "React", description: "Interfaces modulaires en composants" },
  { nom: "Next.js", description: "SEO et rendu côté serveur" },
  { nom: "TypeScript", description: "Typage statique, moins d'erreurs" },
  { nom: "JavaScript", description: "Interfaces interactives" },
  { nom: "Angular", description: "Applications web complexes" },
  { nom: "HTML / SCSS", description: "Sémantique et styles maintenables" },
];

const back: Skill[] = [
  { nom: "Node.js", description: "JavaScript côté serveur" },
  { nom: "Express", description: "API REST rapides" },
  { nom: "PostgreSQL", description: "Base de données relationnelle" },
  { nom: "Drizzle", description: "ORM TypeScript" },
  { nom: "Sequelize", description: "ORM JavaScript" },
  { nom: "PHP", description: "Développement côté serveur" },
];

function SkillList({ skills }: { skills: Skill[] }) {
  return (
    <ul className="home-skills__list">
      {skills.map((skill) => (
        <li key={skill.nom} className="home-skills__item">
          <span className="home-skills__name">{skill.nom}</span>
          <span className="home-skills__desc">{skill.description}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="home-skills" aria-labelledby="skills-title">
      <div className="home-skills__head">
        <p className="home-skills__eyebrow">Compétences</p>
        <h2 id="skills-title" className="home-skills__title">
          Une stack moderne, du front au back.
        </h2>
      </div>

      <div className="home-skills__grid">
        <div className="home-skills__card home-skills__card--dark">
          <div className="home-skills__card-head">
            <h3 className="home-skills__card-title">Front-end</h3>
            <span className="home-skills__label">Spécialité</span>
          </div>
          <SkillList skills={front} />
        </div>

        <div className="home-skills__card">
          <div className="home-skills__card-head">
            <h3 className="home-skills__card-title">Back-end</h3>
            <span className="home-skills__label">En progression</span>
          </div>
          <SkillList skills={back} />
        </div>
      </div>
    </section>
  );
}
