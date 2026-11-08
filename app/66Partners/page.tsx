import type { Metadata } from "next";
import ProjectPage from "../components/ProjectPage/ProjectPage";

export const metadata: Metadata = {
  title: "66partners - Elodie Orozco Taveira",
  description:
    "66partners, application mobile de recherche de partenaires sportifs en Occitanie (React, Drizzle, PostgreSQL).",
};

export default function SixtySixPartners() {
  return (
    <ProjectPage
      tag="Application mobile"
      title="66partners"
      subtitle="Trouver des partenaires sportifs près de chez soi."
      stack={["React", "Drizzle", "PostgreSQL"]}
      media={{
        kind: "image",
        src: "/66Partners/logo.png",
        alt: "Écran d'accueil de l'application 66partners",
        width: 849,
        height: 1851,
        variant: "phone",
      }}
      facts={[
        { label: "Type", value: "Application mobile" },
        { label: "Usage", value: "Recherche de partenaires sportifs" },
        { label: "Zone", value: "Pyrénées-Orientales, puis toute l'Occitanie" },
      ]}
      link={{ href: "https://66partners.fr", label: "Voir le site" }}
    >
      <p>
        <strong>66partners</strong> est une application mobile de recherche de
        partenaires sportifs.
      </p>
      <p>
        Lancée au départ dans les <strong>Pyrénées-Orientales</strong>,
        l&apos;application a ensuite évolué pour couvrir toute
        l&apos;<strong>Occitanie</strong>.
      </p>
      <p>
        Elle est développée avec <strong>React</strong>, l&apos;ORM{" "}
        <strong>Drizzle</strong> et une base de données{" "}
        <strong>PostgreSQL</strong>.
      </p>
    </ProjectPage>
  );
}
