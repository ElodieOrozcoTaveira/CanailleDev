import "../Skills/Skills.scss";
import Image from "next/image";

export default function Skills() {
    const skills = [
        {
            id:1,
            skill: 'Design',
            outils: [
                {name: 'Figma', icon:'/Icones/figma.png'},
                {name: 'SCSS', icon:'/Icones/sass.png'},
                {name: 'UX/UI', icon:'/Icones/ux.png'}
            ] 
        },
        {
            id: 2,
            skill: 'Front-end',
            outils: [
                {name: 'React', icon: '/Icones/react.png'},
                {name: 'NextJs', icon:'/Icones/next.png'},
                {name: 'TypeScript', icon:'/Icones/ts.png'}
            ]
        },
        {
            id:3,
            skill: 'Back-end',
            outils: [
                {name: 'NodeJs', icon: '/Icones/node.png'},
                {name: 'Sequelize', icon:'/Icones/sql.png'},
                {name: 'Postgresql', icon:'/Icones/postgresql.png'}
           ]
        },
        {
            id:4,
            skill:'Outils',
            outils: [
                {name: 'Github', icon: '/Icones/github.png'},
                {name: 'Vercel', icon:'/Icones/vercel.svg'}
            ]
        },
        
    ]


    return(
       <div className="container-skills">
      <h2 className="container-skills__h2">Mes compétences</h2>
      <div className="container-skills__underline"></div>

      <div className="container-skills__grid">
        {skills.map((category) => (
          <article key={category.id} className="container-skills__article">

            <h3 className="container-skills__category" >{category.skill}</h3>

            <ul>
              {category.outils.map((outil, index) => (
                <li key={index} className="container-skills__item">
                  <Image
                   className="container-skills__logo"
                   src={outil.icon} 
                   alt={outil.name}
                   priority
                   width={35}
                   height={35}
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
