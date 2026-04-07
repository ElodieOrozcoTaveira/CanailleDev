"use client";

import { Sparkle } from "lucide-react";
import "../aPropos/Apropos.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Apropos() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    if (!("IntersectionObserver" in window)) {
      img.classList.add("is-in-view");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Restart the animation each time the image enters the viewport.
            img.classList.remove("is-in-view");
            void img.offsetWidth;
            img.classList.add("is-in-view");
          } else {
            img.classList.remove("is-in-view");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.15,
      },
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container-apropos">
      <h2 className="container-apropos__h2">À propos de moi</h2>
      <div className="container-apropos__underline"></div>

      <section className="container-apropos__section">
        <div className="container-apropos-leftside">
          <Image
            src="/CanailleDev/Pro/portrait-hq.webp"
            alt="photo portrait"
            width={280}
            height={420}
            quality={100}
            sizes="(max-width: 768px) 70vw, 280px"
            ref={imageRef}
            className="container-apropos__image"
          />

          <h3 className="container-apropos__nom">Elodie Orozco Taveira</h3>
          <h4 className="container-apropos__dev">
            Développeuse Web Junior Front End
          </h4>
        </div>

        <section className="container-apropos__texte">
          <p className="container-apropos__p">
            Développeuse web freelance, je conçois des applications modernes,
            performantes et centrées sur l’utilisateur.
          </p>

          <p className="container-apropos__p">
            Issue d’une reconversion professionnelle, j’ai choisi de quitter ma
            carrière dans la surêté ferroviaire afin de m’orienter vers le
            développement web pour allier logique, créativité et résolution de
            problèmes. Cette transition m’a permis de développer une forte
            capacité d’adaptation, de la rigueur et un réel sens du détail.
          </p>

          <p className="container-apropos__p">
            Aujourd’hui, je développe des interfaces claires, accessibles et
            maintenables, avec une attention particulière portée à l’expérience
            utilisateur et à la qualité du code.
          </p>

          <p className="container-apropos__p">
            Curieuse et en constante évolution, je continue d’apprendre chaque
            jour pour proposer des solutions modernes, fiables et adaptées aux
            besoins de chaque projet.
          </p>

          <Link href="#contact"
              className="container-apropos__link"
              >
            <div className="container-apropos__voirplus">Contactez-moi</div>
          </Link>
        </section>
      </section>

      <p className="container-apropos__intro">
        <Sparkle size={12} /> Rigueur, précision et sens du détail au service de
        vos projets web <Sparkle size={12} />
      </p>
    </div>
  );
}
