import type { Metadata } from "next";
import LegalPage, { LegalSection } from "../components/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité - Elodie Orozco Taveira",
};

export default function Confidentialite() {
  return (
    <LegalPage
      eyebrow="Vos données"
      title="Politique de confidentialité"
      updated="Janvier 2026"
    >
      <LegalSection title="Responsable du traitement">
        <p>
          Les données personnelles sont collectées par Elodie Orozco Taveira, en
          qualité de responsable du traitement.
        </p>
      </LegalSection>

      <LegalSection title="1. Collecte des données personnelles">
        <p>Les informations suivantes peuvent être collectées :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse email</li>
          <li>Message envoyé via le formulaire de contact</li>
          <li>Adresse IP (à des fins de sécurité)</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Utilisation des données">
        <p>Les données collectées servent uniquement à :</p>
        <ul>
          <li>Répondre aux demandes envoyées</li>
          <li>Établir un contact professionnel</li>
          <li>Assurer la sécurité du site</li>
        </ul>
        <p>
          <strong>
            Aucune donnée n&apos;est vendue, louée ou transmise à des tiers.
          </strong>
        </p>
        <p>Le traitement des données repose sur les bases légales suivantes :</p>
        <ul>
          <li>Consentement de l&apos;utilisateur via le formulaire de contact</li>
          <li>Intérêt légitime pour assurer la sécurité du site</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Durée de conservation">
        <p>
          Les données personnelles sont conservées pour une durée maximale de{" "}
          <strong>3 ans</strong> à compter du dernier échange.
        </p>
      </LegalSection>

      <LegalSection title="4. Sécurité des données">
        <p>Les données sont stockées sur des systèmes sécurisés.</p>
        <p>
          Elles sont hébergées par Vercel Inc., dont les serveurs peuvent être
          situés en dehors de l&apos;Union européenne.
        </p>
        <p>
          Toutes les précautions nécessaires sont prises pour éviter toute
          perte, accès non autorisé ou divulgation.
        </p>
      </LegalSection>

      <LegalSection title="5. Vos droits">
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul>
          <li>Droit d&apos;accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l&apos;effacement</li>
          <li>Droit à la portabilité</li>
          <li>Droit d&apos;opposition</li>
          <li>Droit à la limitation</li>
        </ul>
        <p>
          <strong>Vous pouvez exercer vos droits à tout moment à :</strong>{" "}
          <a href="mailto:elodie.orotav@hotmail.com">elodie.orotav@hotmail.com</a>
        </p>
        <p>
          Vous disposez également du droit d&apos;introduire une réclamation
          auprès de la{" "}
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            CNIL
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies">
        <p>
          <strong>Types de cookies utilisés :</strong>
        </p>
        <ul>
          <li>Cookies techniques (fonctionnement du site)</li>
          <li>Cookies statistiques (facultatifs)</li>
        </ul>
        <p>
          Lors de votre première visite, un bandeau de gestion des cookies vous
          permet d&apos;accepter ou de refuser les cookies non essentiels.
        </p>
        <p>
          Vous pouvez également gérer vos préférences via les paramètres de
          votre navigateur.
        </p>
      </LegalSection>

      <LegalSection title="7. Modification de la politique">
        <p>
          Cette politique peut être modifiée à tout moment afin de rester
          conforme à la législation en vigueur. La date de dernière mise à jour
          est indiquée en haut de cette page.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
