import "../Skills/Skills.scss";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      id: 1,
      skill: "Design",
      outils: [
        { name: "Figma", icon: "/Icones/figma.png" },
        { name: "UX/UI", icon: "/Icones/ux.webp" },
        { name: "SCSS", icon: "/Icones/sass.webp" },
      ],
    },
    {
      id: 2,
      skill: "Front-end",
      outils: [
        { name: "HTML / CSS", icon: "/Icones/html.webp" },
        { name: "React", icon: "/Icones/react.webp" },
        { name: "NextJs", icon: "/Icones/next.webp" },
        { name: "TypeScript", icon: "/Icones/ts.webp" },
      ],
    },
    {
      id: 3,
      skill: "Back-end",
      outils: [
        { name: "NodeJs", icon: "/Icones/node.webp" },
        { name: "API REST", icon: "/Icones/api.webp" },
        { name: "Sequelize", icon: "/Icones/sql.webp" },
        { name: "Postgresql", icon: "/Icones/postgresql.webp" },
      ],
    },
    {
      id: 4,
      skill: "Outils",
      outils: [
        { name: "Github", icon: "/Icones/github.png" },
        { name: "Docker", icon: "/Icones/docker.png" },
        { name: "Vercel", icon: "/Icones/vercel.webp" },
      ],
    },
  ];

  return (
    <div className="container-skills">
      <h2 className="container-skills__h2">Skills</h2>
      <div className="container-skills__underline"></div>

      <div className="container-skills__grid">
        {skills.map((category) => (
          <article key={category.id} className="container-skills__article">
            <h3 className="container-skills__category">{category.skill}</h3>

            <ul>
              {category.outils.map((outil, index) => (
                <li key={index} className="container-skills__item">
                  <Image
                    className="container-skills__logo"
                    src={outil.icon}
                    alt={outil.name}
                    priority
                    width={32}
                    height={32}
                    loading="eager"
                  />
                  <h4 className="container-skills__outil">{outil.name}</h4>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
