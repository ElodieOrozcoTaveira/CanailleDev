"use client";

import "../NanasCoffee/nanascoffee.scss";
import Fleche from "../components/Fleche/Fleche";
import Footer from "../components/layout/Footer/Footer";

export default function ProjectCarousel() {
  return (
    <>
      <div className="video-container">
        <video
          controls
          autoPlay
          muted
          playsInline // empeche la vidéo en grand écran
          className="video-container__project-video"
          width={500}
          height={500}
        >
          <source src="/NanasCoffee/nanascoffee.webm" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <div className="container-Ocoffee">
        <p className="container-Ocoffee__tag">
            Projet Personnel
          </p>
        <h1 className="container-Ocoffee__h1">
          Nana&apos;s Coffee - Site Vitrine
        </h1>
        <div className="container-Ocoffee__underline"></div>
        <div className="container-Ocoffee__stack" aria-label="Stack utilisée">
          <span>WordPress</span>
          
        </div>
        <p className="container-Ocoffee__p">
          <span className="container-Ocoffee__span">Nana&apos;sCoffee</span> est un site web conçu avec WordPress, mettant en lumière une entreprise familiale spécialisée dans le café artisanal. L&apos;objectif était de créer une présence en ligne élégante et accessible, permettant de présenter les produits, raconter l&apos;histoire de la marque et faciliter la découverte de son univers. Ce projet m&apos;a permis de développer mes compétences en conception de sites sous CMS, en intégration de contenus et en expérience utilisateur.
          <span className="container-Ocoffee__span">
            {" "}
            Node.js et Express.js
          </span>
          côté serveur, en utilisant
          <span className="container-Ocoffee__span"> EJS</span> pour le rendu
          dynamique des pages, ainsi que HTML et CSS pour la structure et le
          style.
          <span className="container-Ocoffee__span"> O&apos;Coffee</span>{" "}
          m&apos;a permis de mettre en pratique les bases du développement
          Back-End, la gestion des routes, le rendu côté serveur et
          l&apos;organisation d&apos;un projet web complet.
        </p>
      </div>

      <Fleche />
      <Footer />
    </>
  );
}
