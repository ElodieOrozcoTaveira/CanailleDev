import type { Metadata } from "next";
import ProjectPage from "../components/ProjectPage/ProjectPage";

export const metadata: Metadata = {
  title: "Nana's Coffee - Elodie Orozco Taveira",
  description:
    "Nana's Coffee, site vitrine WordPress pour une entreprise familiale de café artisanal.",
};

export default function NanasCoffee() {
  return (
    <ProjectPage
      tag="Projet personnel"
      title="Nana's Coffee"
      subtitle="Site vitrine pour une entreprise familiale de café artisanal."
      stack={["WordPress"]}
      media={{
        kind: "video",
        sources: [
          { src: "/NanasCoffee/nanascoffee.webm", type: "video/webm" },
          { src: "/NanasCoffee/nanascoffee.mp4", type: "video/mp4" },
        ],
      }}
      facts={[
        { label: "Type", value: "Site vitrine" },
        { label: "Outil", value: "WordPress (CMS)" },
        { label: "Contexte", value: "Projet personnel" },
      ]}
    >
      <p>
        <strong>Nana&apos;s Coffee</strong> est un site web conçu avec
        WordPress, qui met en lumière une entreprise familiale spécialisée dans
        le café artisanal.
      </p>
      <p>
        L&apos;objectif était de créer une présence en ligne élégante et
        accessible, pour présenter les produits, raconter l&apos;histoire de la
        marque et faciliter la découverte de son univers.
      </p>
      <p>
        Ce projet m&apos;a permis de développer mes compétences en conception de
        sites sous CMS, en intégration de contenus et en expérience
        utilisateur.
      </p>
    </ProjectPage>
  );
}
