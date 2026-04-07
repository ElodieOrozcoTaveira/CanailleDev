import "../Services/Processus.scss";
import { Brush, Code, MessageSquare, PackageCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProcessItem {
    id:number;
    etape: number;
    numero:number;
  logo: LucideIcon;
    titre:string;
    paragraphe:string;
}

export default function Processus() {
    
    const processus : ProcessItem[] = [
        {    id:1,
             etape:1,
             numero:1, 
             logo:MessageSquare, 
             titre:'Discovery', 
             paragraphe: 'On échange sur nos visions, vos objectifs et votre audience pour définir la direction parfaite'},
        {    id:2,
             etape:2,
             numero:2, 
             logo:Brush, 
             titre:'Design', 
             paragraphe: 'Je crée une maquette visuelle complète que vous validerez avant de commencer le développement du projet'},
        {    id:3, 
            etape:3,
            numero:3, 
            logo:Code, 
            titre:'Développement', 
            paragraphe: 'Code propre, performant et reponsive. Vous pourrez suivre l\'avancement du projet.'},
        {   id:4, 
            etape:4,
            numero:4, 
            logo:PackageCheck, 
            titre:'Livraison', 
            paragraphe: 'Tests finaux et mise en ligne. Je resterai disponible pour le post-lancement.'},
    ]
    
    return(
        
        <>
        <section className="container-processus">
            <h2 className="container-processus__h2">Mon processus en <span className="container-processus__span">4 étapes</span></h2>
            <div className="container-processus__underline"></div>
            <h3 className="container-processus__h3">Je procède avec une méthode claire et transparente du développement jusqu&apos;à la livraison du projet</h3>
        

        <section className="container-processus__section">
                 
                    {processus.map((process) => {
                      const Logo = process.logo;

                      return (
                      <div key={process.id} className="container-processus__key">
                        <div className="container-processus__number">{process.numero}</div>
                        <Logo className="container-processus__img" aria-hidden="true" />
                        <p className="container-processus__titre">{process.titre}</p>
                        <p className="container-processus__paragraphe">
                          {process.paragraphe}
                        </p>
                      </div>
                    )})}
                </section>
            </section>
        </>

    )
}