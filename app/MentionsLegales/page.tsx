import CanailleDev from "../components/canailledev/CanailleDev";
import Fleche from "../components/Fleche/Fleche";
import Footer from "../components/layout/Footer/Footer";
import "../MentionsLegales/MentionsLegales.scss";

export default function MentionsLegales() {
  return (
    <>
      <CanailleDev />
      <div className="container-mentions">

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">1. Éditeur du site</h2>
          <div className="container-mentions__underline"></div>

          <p>
            <strong>Nom du site :</strong> CanailleDev
          </p>
          <p>
            <strong>Responsable de publication :</strong> Elodie Orozco Taveira
          </p>
          <p>
            <strong>Statut :</strong> Auto-entrepreneuse
          </p>
          <p>
            <strong>Activité :</strong> Développement web / conception
            d&apos;applications
          </p>
          <p>
            <strong>Adresse :</strong> Saint Feliu d&apos;Avall (66)
          </p>
          <p>
            <strong>Email :</strong>{" "}
            <a
              className="container-mentions__adress"
              href="mailto:elodie.orotav@hotmail.com"
            >
              elodie.orotav@hotmail.com
            </a>
          </p>
          <p>
            <strong>SIRET :</strong> 97861311500036
          </p>
        </section>

        <section>
          <h2 className="container-mentions__h2">2. Hébergeur du site</h2>
          <div className="container-mentions__underline"></div>

          <p>Le site est hébergé par :</p>
          <p>
            <strong>Nom de l&apos;hébergeur :</strong> Vercel Inc.
          </p>
          <p>
            <strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA
            91723, États-Unis
          </p>
          <p>
            <strong>Site web :</strong>{" "}
            <a
              className="container-mentions__adress"
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">
            3. Propriété intellectuelle
          </h2>
          <div className="container-mentions__underline"></div>

          <p>
            L&apos;ensemble des contenus du site CanailleDev (textes,
            graphismes, logos, vidéos, structure, code) est la propriété
            exclusive d&apos;Elodie Orozco Taveira et est protégé par le droit
            de la propriété intellectuelle.
          </p>
          <p>
            <strong>Crédits :</strong>
          </p>
          <ul>
            <li>
              Les icônes utilisées proviennent de{" "}
              <a
                className="container-mentions__adress"
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucide React
              </a>
              , une bibliothèque d&apos;icônes open source sous licence ISC.
            </li>
            <li>
              Les images illustratives ont été générées avec{" "}
              <a
                className="container-mentions__adress"
                href="https://openai.com/dall-e"
                target="_blank"
                rel="noopener noreferrer"
              >
                DALL-E (ChatGPT)
              </a>{" "}
              d&apos;OpenAI.
            </li>
          </ul>
          <p>
            Toute reproduction, distribution, modification ou utilisation sans
            autorisation écrite préalable est strictement interdite.
          </p>
        </section>

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">4. Responsabilité</h2>
          <div className="container-mentions__underline"></div>

          <p>
            L&apos;éditrice du site s&apos;efforce de fournir des informations
            exactes et mises à jour régulièrement. Toutefois, elle ne saurait
            être tenue responsable des erreurs, omissions ou résultats pouvant
            être obtenus par un mauvais usage des informations présentes sur le
            site.
          </p>
          <p>
            Des liens vers des sites tiers peuvent être présents. CanailleDev
            n&apos;exerce aucun contrôle sur ces sites et ne peut être tenue
            responsable de leur contenu.
          </p>
        </section>

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">5. Données personnelles</h2>
          <div className="container-mentions__underline"></div>

          <p>
            Les données personnelles collectées via le formulaire de contact
            sont uniquement utilisées pour répondre aux demandes de
            l&apos;utilisateur.
          </p>
          <p>Elles ne sont ni cédées ni vendues à des tiers.</p>
          <p>
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez de droits :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données personnelles</li>
            <li>Droit de rectification des données inexactes</li>
            <li>Droit de suppression de vos données</li>
            <li>Droit d&apos;opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
          </ul>
          <p>
            <strong>Pour exercer vos droits, contactez :</strong>{" "}
            <a
              className="container-mentions__adress"
              href="mailto:elodie.orotav@hotmail.com"
            >
              elodie.orotav@hotmail.com
            </a>
          </p>
        </section>

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">6. Cookies</h2>
          <div className="container-mentions__underline"></div>

          <p>
            Le site peut utiliser des cookies strictement nécessaires au bon
            fonctionnement du site ou des cookies de mesure d&apos;audience.
          </p>
          <p>
            Vous pouvez gérer vos préférences en matière de cookies via les
            paramètres de votre navigateur.
          </p>
        </section>

        <section className="container-mentions__section">
          <h2 className="container-mentions__h2">7. Droit applicable</h2>
          <div className="container-mentions__underline"></div>

          <p>
            Les présentes mentions légales sont régies par le droit français.
          </p>
          <p>Tout litige relève de la compétence des tribunaux français.</p>
        </section>
      </div>
      <Fleche />
      <Footer />
    </>
  );
}
