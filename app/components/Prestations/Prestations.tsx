import '../Prestations/Prestations.scss'; 
import Image from 'next/image';

export default function Prestations() {

    const prestations = [
        {
            id:1, sujet: 'Création de sites vitrine' , p:'Sites modernes et responsives', image:'/presta/responsive.png'
        },
         {
            id:2, sujet: 'Applications Web' , p:'React, TypeScript, API REST', image:'/presta/eclair.png'
        },
        {
            id:3, sujet: 'Sites e-commerce' , p:'Solutions de vente en ligne personnalisées', image:'/presta/boutique.png'
        },
         {
            id:4, sujet: 'Refont/Maintenance' , p:'Améliorations de sites existants', image:'/presta/clé.png'
        },
    ]

    return(
        <>
        <div className="container-services">
            <h2 className="container-services__h2">Mes Services</h2>
            <div className="container-services__underline"></div>
        </div>

        <div className="container-services__grid">
            {prestations.map((services) => (
                <article 
                key={services.id}
                className="container-services__article">
                    <div className="container-services__logosujet">
                    <Image
                        className="container-services__logo"
                        src={services.image} 
                        alt={services.sujet}
                        priority
                        width={25}
                        height={25}
                        loading="eager"
                                     />
                    <h2 className="container-services__sujet">{services.sujet}</h2>

                    </div>
                    <p className="container-services__p">{services.p}</p>
                </article>
            ))}
            <p className="container-services__phrase">Chaque projet est unique. Contactez moi pour un devis personnalisé</p>
        </div>
        </>

    )
}