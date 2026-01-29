'use client';

import '../newApropos/newApropos.scss';
import { Code, Palette, ServerCrash, LucideIcon } from 'lucide-react';
import AnimatedItem from '../animation/animation';

interface AboutItem {
  id: number;
  img: LucideIcon;
  titre: string;
  contenu: string;
}

export default function NewApropos() {

  const about: AboutItem[] = [
    {
      id: 1,
      img: Code,
      titre: 'Développement',
      contenu:
        "Je conçois et développe des applications web et mobiles en m'appuyant sur des technologies modernes et des bonnes pratiques de développement. Développeuse junior passionnée, je cherche constamment à améliorer mes compétences afin de créer des applications efficaces, évolutives et centrées sur l'utilisateur."
    },
    {
      id: 2,
      img: Palette,
      titre: 'UI / UX',
      contenu:
        "Je conçois des interfaces utilisateur intuitives et attrayantes en veillant à offrir une expérience utilisateur fluide, grâce à une conception basée sur la recherche, des wireframes et des prototypes interactifs."
    },
    {
      id: 3,
      img: ServerCrash,
      titre: 'Débogage',
      contenu:
        "J'aide à identifier, dépanner et résoudre des bugs logiciels afin de garantir un fonctionnement fluide et de bonnes performances des applications sur différentes plateformes."
    },
  ];

  return (
    <>
      <h2 className="about-h2">Ce que je propose</h2>
      <h2 className="about-h3">Ce que je propose</h2>

      <div className="about-container">
        {about.map((apropos, index) => {
          const IconComponent = apropos.img;

          return (
            <AnimatedItem key={apropos.id} delay={index * 10}>
              <article className="about-container__article">
                <IconComponent 
                  className="about-container__img"
                  color="#2e5f3e" 
                  size={30}
                />
                <h2 className="about-container__titre">{apropos.titre}</h2>
                <h3 className="about-container__contenu">{apropos.contenu}</h3>
              </article>
            </AnimatedItem>
          );
        })}
      </div>
    </>
  );
}
