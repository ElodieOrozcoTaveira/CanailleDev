import type { Metadata } from "next";
import ProjectPage from "../components/ProjectPage/ProjectPage";

export const metadata: Metadata = {
  title: "BlaBlaBook - Elodie Orozco Taveira",
  description:
    "BlaBlaBook, application web de gestion de bibliothèque personnelle réalisée en équipe (React, Node.js, Express, Redis).",
};

export default function BlaBlaBook() {
  return (
    <ProjectPage
      tag="Projet formation"
      title="BlaBlaBook"
      subtitle="Plateforme de gestion personnelle de bibliothèque."
      stack={["React", "Node.js", "Express", "Redis", "Open Library API"]}
      media={{
        kind: "video",
        sources: [{ src: "/BBB/BBBnew.webm", type: "video/webm" }],
      }}
      facts={[
        { label: "Type", value: "Application web fullstack" },
        { label: "Contexte", value: "Projet de fin de formation (Apothéose), école O'clock" },
        { label: "Organisation", value: "Projet réalisé en équipe" },
        { label: "Validation", value: "Titre Professionnel Concepteur Développeur d'Applications" },
      ]}
    >
      <p>
        <strong>BlaBlaBook</strong> est une application web dédiée aux
        passionnés de lecture. Elle permet de gérer facilement une bibliothèque
        personnelle tout en favorisant l&apos;échange et la découverte de
        nouveaux ouvrages.
      </p>
      <p>
        Les utilisateurs peuvent rechercher des livres via{" "}
        <strong>l&apos;API Open Library</strong>, les ajouter à leur collection,
        suivre leurs lectures et consulter les détails de chaque ouvrage.
      </p>
      <p>
        Le projet repose sur une architecture moderne : une{" "}
        <strong>API REST</strong> développée en Node.js / Express, une SPA React
        côté front-end et une authentification sécurisée par cookies de session
        stockés dans Redis.
      </p>
      <p>
        BlaBlaBook a été réalisé en équipe dans le cadre du projet de fin de
        formation (Apothéose) à l&apos;école O&apos;clock. Il m&apos;a permis de
        consolider mes compétences en développement fullstack, en architecture
        applicative et en travail collaboratif. Ce projet a été présenté devant
        un jury pour valider mon Titre Professionnel de Concepteur Développeur
        d&apos;Applications.
      </p>
    </ProjectPage>
  );
}
