import CanailleDev from '../components/canailledev/CanailleDev';
import Fleche from '../components/Fleche/Fleche';
import Footer from '../components/layout/Footer/Footer';
import './Confidentialite.scss';


export default function Confidentialité() {
    return(
        <>
        <CanailleDev/>
        <div className="container-confidentialite">

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>1. Collecte des données personnelles</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les informations suivantes peuvent être collectées :</p>
                <ul>
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Message envoyé via formulaire de contact</li>
                    <li>Adresse IP (à des fins de sécurité)</li>
                </ul>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>2. Utilisation des données</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les données collectées servent uniquement à :</p>
                <ul>
                    <li>Répondre aux demandes envoyées</li>
                    <li>Établir un contact professionnel</li>
                    <li>Assurer la sécurité du site</li>
                </ul>
                <p className='container-confidentialite__p'><strong>Aucune donnée n&apos;est vendue, louée ou transmise à des tiers.</strong></p>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>3. Durée de conservation</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les données personnelles sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier échange.</p>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>4. Sécurité des données</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les données sont stockées sur des systèmes sécurisés.</p>
                <p className='container-confidentialite__p'>Toutes les précautions nécessaires sont prises pour éviter toute perte, accès non autorisé ou divulgation.</p>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>5. Vos droits</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul>
                    <li>Droit d&apos;accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l&apos;effacement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d&apos;opposition</li>
                    <li>Droit à la limitation</li>
                </ul>
                <p className='container-confidentialite__p'><strong>Vous pouvez exercer vos droits à tout moment à :</strong> <a className='container-confidentialite__adress' href="mailto:elodie.orotav@hotmail.com">elodie.orotav@hotmail.com</a></p>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>6. Cookies</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'><strong>Types de cookies utilisés :</strong></p>
                <ul>
                    <li>Cookies techniques (fonctionnement du site)</li>
                    <li>Cookies statistiques (facultatif)</li>
                </ul>
                <p className='container-confidentialite__p'>Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.</p>
            </section>

            <section className='container-confidentialite__section' >
                <h2 className='container-confidentialite__h2'>7. Modification de la politique</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Cette politique peut être modifiée à tout moment afin de rester conforme à la loi.</p>
                <p className='container-confidentialite__p'>La date de dernière mise à jour sera indiquée ci-dessous.</p>
                <p className='container-confidentialite__p'><strong>Dernière mise à jour :</strong> Décembre 2025</p>
            </section>
        </div>
        <Fleche/>
        <Footer/>
        </>
    )
}