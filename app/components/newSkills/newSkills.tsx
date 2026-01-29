import "../newSkills/newSkills.scss";
import Image from "next/image";

export default function Skills() {
  const skills = [
    { id: 1, icon: "https://skillicons.dev/icons?i=html", titre: "HTML" },

    { id: 2, icon: "https://skillicons.dev/icons?i=css", titre: "CSS" },

    { id: 3, icon: "https://skillicons.dev/icons?i=sass", titre: "SCSS" },

    { id: 4, icon: "https://skillicons.dev/icons?i=js", titre: "JavaScript" },

    { id: 5, icon: "https://skillicons.dev/icons?i=ts", titre: "TypeScript" },

    { id: 6, icon: "https://skillicons.dev/icons?i=nodejs", titre: "NodeJs" },

    { id: 7, icon: "https://skillicons.dev/icons?i=express", titre: "ExpressJS" },

    { id: 8, icon: "https://skillicons.dev/icons?i=npm", titre: "NPM" },

    { id: 9, icon: "https://skillicons.dev/icons?i=sequelize", titre: "Sequelize" },

    { id: 10, icon: "https://skillicons.dev/icons?i=postgres", titre: "PostgreSQL" },

    { id: 11, icon: "https://skillicons.dev/icons?i=react", titre: "React" },

    { id: 12, icon: "https://skillicons.dev/icons?i=nextjs", titre: "NextJS" },

    { id: 13, icon: "https://skillicons.dev/icons?i=docker", titre: "Docker" },

    { id: 14, icon: "https://skillicons.dev/icons?i=figma", titre: "Figma" },

    { id: 15, icon: "https://skillicons.dev/icons?i=linux", titre: "Linux" },

    { id: 16, icon: "https://skillicons.dev/icons?i=vercel", titre: "Vercel" },

    { id: 17, icon: "https://skillicons.dev/icons?i=git", titre: "Git" },
    { id: 18, icon: "https://skillicons.dev/icons?i=github", titre: "Github" },

  ];

  return (
    <>
      <div className="skills-container">
        <section className="container-skills">
      <h2 className="skills-h2">Mes Compétences</h2>
      <h3 className="skills-h3">Mes Compétences</h3>
        </section>
        {skills.map((skill) => (
          <div key={skill.id} className="skills-container__id">
            <Image className="skills-container__img"  src={skill.icon} alt={skill.titre} width={48} height={48} />
            <p className="skills-container__titre" >{skill.titre}</p>
          </div>
        ))}
      </div>
    </>
  );
}
