import "../MesProjets/MesProjets.scss";
import Image from "next/image";

export default function MesProjets() {

    const projets = [
        {
            id:1, projet: 'Les Chips de Nos Montagnes', image: '/Projets/lcdnm.png',
        },
        {
            id:2, projet: 'Braap! - en cours..', image:'/Projets/braaap.png'
        },

    ]

    return(
        <>
        <div className="container-projets">
            <h2 className="container-projets__h2">Mes Projets</h2>
            <div className="container-projets__underline"></div>
        </div>

        <div className="container-projets__grid">
            {projets.map((projects) => (
                <article key={projects.id} className="container-projets__article">

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
                </article>
            ))}
        </div>
        </>

    )
}