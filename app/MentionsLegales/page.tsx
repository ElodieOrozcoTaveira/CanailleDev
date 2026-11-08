import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales - Elodie Orozco Taveira",
};

export default function MentionsLegales() {
  return (
    <LegalPage eyebrow="Informations légales" title="Mentions légales">
      <LegalSection title="1. Éditeur du site">
        <dl className="legal-page__details">
          <dt>Nom du site</dt>
          <dd>Elodie Orozco Taveira – Développeuse web</dd>
          <dt>Responsable de publication</dt>
          <dd>Elodie Orozco Taveira</dd>
          <dt>Statut</dt>
          <dd>Auto-entrepreneuse</dd>
          <dt>Activité</dt>
          <dd>Développement web / conception d&apos;applications</dd>
          <dt>Adresse</dt>
          <dd>Saint-Feliu d&apos;Avall (66)</dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:elodie.orotav@hotmail.com">elodie.orotav@hotmail.com</a>
          </dd>
          <dt>SIRET</dt>
          <dd>97861311500036</dd>
        </dl>
      </LegalSection>

      <LegalSection title="2. Hébergeur du site">
        <dl className="legal-page__details">
          <dt>Hébergeur</dt>
          <dd>Vercel Inc.</dd>
          <dt>Adresse</dt>
          <dd>440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</dd>
          <dt>Site web</dt>
          <dd>
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              https://vercel.com
            </a>
          </dd>
        </dl>
      </LegalSection>

      <LegalSection title="3. Propriété intellectuelle">
        <p>
          L&apos;ensemble des contenus de ce site (textes, graphismes, logos,
          vidéos, structure, code) est la propriété exclusive d&apos;Elodie
          Orozco Taveira et est protégé par le droit de la propriété
          intellectuelle.
        </p>
        <p>
          <strong>Crédits :</strong>
        </p>
        <ul>
          <li>
            Les icônes utilisées proviennent de{" "}
            <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
              Lucide React
            </a>
            , une bibliothèque d&apos;icônes open source sous licence ISC.
          </li>
          <li>
            Les images illustratives ont été générées avec{" "}
            <a
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
      </LegalSection>

      <LegalSection title="4. Responsabilité">
        <p>
          L&apos;éditrice du site s&apos;efforce de fournir des informations
          exactes et mises à jour régulièrement. Toutefois, elle ne saurait être
          tenue responsable des erreurs, omissions ou résultats pouvant être
          obtenus par un mauvais usage des informations présentes sur le site.
        </p>
        <p>
          Des liens vers des sites tiers peuvent être présents. L&apos;éditrice
          n&apos;exerce aucun contrôle sur ces sites et ne peut être tenue
          responsable de leur contenu.
        </p>
      </LegalSection>

      <LegalSection title="5. Données personnelles">
        <p>
          Les données personnelles collectées via le formulaire de contact sont
          uniquement utilisées pour répondre aux demandes de l&apos;utilisateur.
          Elles ne sont ni cédées ni vendues à des tiers.
        </p>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous disposez des droits suivants :
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
          <a href="mailto:elodie.orotav@hotmail.com">elodie.orotav@hotmail.com</a>
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          Le site peut utiliser des cookies strictement nécessaires au bon
          fonctionnement du site ou des cookies de mesure d&apos;audience.
        </p>
        <p>
          Vous pouvez gérer vos préférences en matière de cookies via les
          paramètres de votre navigateur.
        </p>
      </LegalSection>

      <LegalSection title="7. Droit applicable">
        <p>Les présentes mentions légales sont régies par le droit français.</p>
        <p>Tout litige relève de la compétence des tribunaux français.</p>
      </LegalSection>
    </LegalPage>
  );
}
