import Fleche from '../components/Fleche/Fleche';
import Footer from '../components/layout/Footer/Footer';
import './Confidentialite.scss';

export default function Confidentialité() {
    return(
        <>
        <div className="container-confidentialite">

            <h2 className="container-confidentialite__title">
                Politique de confidentialité
            </h2>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>Responsable du traitement</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>
                    Les données personnelles sont collectées par Elodie Orozco Taveira, en qualité de responsable du traitement.
                </p>
            </section>

            <section className='container-confidentialite__section'>
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

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>2. Utilisation des données</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les données collectées servent uniquement à :</p>
                <ul>
                    <li>Répondre aux demandes envoyées</li>
                    <li>Établir un contact professionnel</li>
                    <li>Assurer la sécurité du site</li>
                </ul>

                <p className='container-confidentialite__p'><strong>Aucune donnée n'est vendue, louée ou transmise à des tiers.</strong></p>

                <p className='container-confidentialite__p'>
                    Le traitement des données repose sur les bases légales suivantes :
                </p>
                <ul>
                    <li>Consentement de l’utilisateur via le formulaire de contact</li>
                    <li>Intérêt légitime pour assurer la sécurité du site</li>
                </ul>
            </section>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>3. Durée de conservation</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>
                    Les données personnelles sont conservées pour une durée maximale de <strong>3 ans</strong> à compter du dernier échange.
                </p>
            </section>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>4. Sécurité des données</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Les données sont stockées sur des systèmes sécurisés.</p>
                <p className='container-confidentialite__p'>
                    Elles sont hébergées par Vercel Inc., dont les serveurs peuvent être situés en dehors de l’Union Européenne.
                </p>
                <p className='container-confidentialite__p'>
                    Toutes les précautions nécessaires sont prises pour éviter toute perte, accès non autorisé ou divulgation.
                </p>
            </section>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>5. Vos droits</h2>
                <div className="container-confidentialite__underline"></div>
                <p className='container-confidentialite__p'>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul>
                    <li>Droit d'accès</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement</li>
                    <li>Droit à la portabilité</li>
                    <li>Droit d'opposition</li>
                    <li>Droit à la limitation</li>
                </ul>

                <p className='container-confidentialite__p'>
                    <strong>Vous pouvez exercer vos droits à tout moment à :</strong>{" "}
                    <a className='container-confidentialite__adress' href="mailto:elodie.orotav@hotmail.com">
                        elodie.orotav@hotmail.com
                    </a>
                </p>

                <p className='container-confidentialite__p'>
                    Vous disposez également du droit d’introduire une réclamation auprès de la CNIL (www.cnil.fr).
                </p>
            </section>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>6. Cookies</h2>
                <div className="container-confidentialite__underline"></div>

                <p className='container-confidentialite__p'><strong>Types de cookies utilisés :</strong></p>
                <ul>
                    <li>Cookies techniques (fonctionnement du site)</li>
                    <li>Cookies statistiques (facultatif)</li>
                </ul>

                <p className='container-confidentialite__p'>
                    Lors de votre première visite, un bandeau de gestion des cookies vous permet d’accepter ou refuser les cookies non essentiels.
                </p>

                <p className='container-confidentialite__p'>
                    Vous pouvez également gérer vos préférences via les paramètres de votre navigateur.
                </p>
            </section>

            <section className='container-confidentialite__section'>
                <h2 className='container-confidentialite__h2'>7. Modification de la politique</h2>
                <div className="container-confidentialite__underline"></div>

                <p className='container-confidentialite__p'>
                    Cette politique peut être modifiée à tout moment afin de rester conforme à la législation en vigueur.
                </p>

                <p className='container-confidentialite__p'>
                    La date de dernière mise à jour sera indiquée ci-dessous.
                </p>

                <p className='container-confidentialite__p'>
                    <strong>Dernière mise à jour :</strong> Janvier 2026
                </p>
            </section>

        </div>
        <Fleche/>
        <Footer/>
        </>
    )
}