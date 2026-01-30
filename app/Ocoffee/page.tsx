'use client';

import '../Ocoffee/ocoffee.scss';
import Fleche from '../components/Fleche/Fleche';
import CanailleDev from '../components/canailledev/CanailleDev';
import Footer from '../components/layout/Footer/Footer';

export default function ProjectCarousel() {
  return (
    <>
      <CanailleDev/>
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
          <source src="/Ocoffee/Ocoffee.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
      <div className="container-Ocoffee">
        <h1 className="container-Ocoffee__h1">OCoffee - Site de vente de cafés</h1>
        <div className="container-Ocoffee__underline"></div>
        <p className="container-Ocoffee__p">
         <span className='container-Ocoffee__span'>OCoffee</span> est mon premier site web de vente de cafés développé dans le cadre de ma formation en développement web.
         Il met en avant une entreprise familiale spécialisée dans la vente de cafés, avec pour objectif de présenter les produits, valoriser le savoir-faire artisanal et proposer une navigation simple et intuitive pour les utilisateurs.

         Le projet a été réalisé avec <span className='container-Ocoffee__span'>Node.js et Express.js</span> côté serveur, en utilisant <span className='container-Ocoffee__span'>EJS</span>  pour le rendu dynamique des pages, ainsi que HTML et CSS pour la structure et le style.
         <span className='container-Ocoffee__span'>OCoffee</span> m’a permis de mettre en pratique les bases du développement Back-End, la gestion des routes, le rendu côté serveur et l’organisation d’un projet web complet.
        </p>
      </div>

      
      <Fleche/>
      <Footer/>
    </>
  )
}