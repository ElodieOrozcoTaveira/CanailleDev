import type { Metadata } from "next";
import ProjectPage from "../components/ProjectPage/ProjectPage";

export const metadata: Metadata = {
  title: "Braap! - Elodie Orozco Taveira",
  description:
    "Braap!, application mobile collaborative pour les motards de piste amateurs (React Native, TypeScript, Supabase).",
};

export default function Braap() {
  return (
    <ProjectPage
      tag="Application mobile collaborative"
      title="Braap!"
      subtitle="L'application des motards de piste amateurs."
      stack={["React Native", "TypeScript", "Supabase"]}
      media={{
        kind: "image",
        src: "/Projets/braap.png",
        alt: "Logo de l'application Braap!",
        width: 1536,
        height: 1024,
      }}
      facts={[
        { label: "Type", value: "Application mobile" },
        { label: "Public", value: "Motards de piste amateurs" },
        { label: "Back-end", value: "Supabase (PostgreSQL, authentification, API)" },
        { label: "Statut", value: "En cours de développement" },
      ]}
      notice="Application en cours de construction"
    >
      <p>
        <strong>Braap</strong> est une application mobile dédiée aux motards de
        piste amateurs. Elle leur permet d&apos;organiser leurs journées de
        roulage, de consulter les informations des circuits et la météo, de
        gérer un planning et une checklist, ainsi que de partager leur
        expérience avec un groupe de riders.
      </p>
      <p>
        Chaque utilisateur peut créer ou rejoindre une journée, suivre ses
        sessions, noter ses performances et conserver un historique personnel.
      </p>
      <p>
        L&apos;application est développée en <strong>React Native</strong> avec{" "}
        <strong>TypeScript</strong> pour le front-end, et s&apos;appuie sur{" "}
        <strong>Supabase</strong> comme back-end (authentification, base de
        données PostgreSQL et API). Une architecture moderne, simple et
        évolutive, adaptée à une application mobile collaborative.
      </p>
    </ProjectPage>
  );
}
