import '../Prestations/Prestations.scss'; 
import Image from 'next/image';

export default function Prestations() {

    const prestations = [
        {
            id:1, sujet: 'Création de sites vitrine' ,
            p: [
                'Sites modernes et responsives  ( 1 à 5 pages )',
                'Design personnalisé',
                'SEO de base',
                'Mise en ligne',
                'Formulaire de contact',
            ],
            image:'/presta/vitrine.png',tarifs:'A partir de 800 euros',
        },
         {
            id:2, sujet: 'Applications Web' ,
            p:[
                'FrontEnd moderne',
                'BackEnd simple',
                'Animations douces',
                'Formulaires',
                'Optimisation des performances',
                'Sécurité de base',
             ],
              image:'/presta/appweb.png',tarifs:'A partir de 1800 euros',
        },
        {
            id:3, sujet: 'Sites e-commerce' ,
            p:[
                'Solutions de vente en ligne personnalisées',
                'Design personnalisé',
             ],
              image:'/presta/ecommerce.png',tarifs:'A partir de 1200 euros',
        },
         {
            id:4, sujet: 'Refont/Maintenance' , 
            p:[
                'Améliorations de sites existants',
                'Correction de bugs',
             ],
            image:'/presta/maintenance.png',tarifs:'50 euros/heure',
        },
    ]

    return(
        <>
        <div className="container-services">
            <h2 className="container-services__h2">Prestations</h2>
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
                        width={30}
                        height={30}
                        loading="eager"
                                     />
                    <h2 className="container-services__sujet">{services.sujet}</h2>

                    </div>
                    <ul className="container-services__ul">
                        {services.p.map((presta, index) => (
                            <li className="container-services__li" key={index}>{presta}</li>
                        ))}
                    </ul>
                    
                    <p className="container-services__tarifs">{services.tarifs}</p>
                </article>
            ))}
        </div>
            <p className="container-services__phrase">Chaque projet est unique. Contactez moi pour un devis personnalisé</p>
        </>

    )
}