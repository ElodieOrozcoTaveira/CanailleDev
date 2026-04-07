'use client';

import '../BBB/bbb.scss';
import Fleche from '../components/Fleche/Fleche';
import Footer from '../components/layout/Footer/Footer';

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
          <source src="/BBB/BBB.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <div className="container-blablabook">
        <h1 className="container-blablabook__h1">BlaBlaBook - Plateforme de Gestion Personnelle de Bibliothèque</h1>
        <div className="container-blablabook__underline"></div>
        <p className="container-blablabook__p">
          <span className='container-blablabook__span'>BlaBlaBook</span> est une application web dédiée aux passionnés de lecture, permettant de gérer facilement une bibliothèque personnelle tout en favorisant l&apos;échange et la découverte de nouveaux ouvrages.
          Les utilisateurs peuvent rechercher des livres via <span className='container-blablabook__span'>l&apos;API Open Library</span>, les ajouter à leur collection, suivre leurs lectures et consulter les détails de chaque ouvrage.
          Le projet repose sur une architecture moderne avec une <span className='container-blablabook__span'>API REST</span> développée en Node.js / Express, une SPA React côté Front end et une authentification sécurisée par cookies de session stockés dans Redis.
          BlaBlaBook a été réalisé en équipe dans le cadre du projet de fin de formation (Apothéose) à l&apos;école O&apos;clock, et m&apos;a permis de consolider mes compétences en développement fullstack, en architecture applicative et en travail collaboratif. Ce projet a été présenté devant un jury pour valider mon Titre Professionnel de Concepteur Développeur d&apos;Applications.
        </p>
      </div>

      
      <Fleche/>
      <Footer/>
    </>
  )
}