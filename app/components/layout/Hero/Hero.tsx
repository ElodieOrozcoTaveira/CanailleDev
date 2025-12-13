"use client";

import Apropos from "../../aPropos/Apropos";
import "./Hero.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="hero-container">          
        <section className="hero-container__bienvenue">
          <h2 className="hero-container__h2">
            Bienvenue sur
          </h2>
          <h3 className="hero-container__h3">Canaille< span className="hero-container__spanCD">Dev</span></h3>
          <h4 className="hero-container__EOT">Elodie Orozco Taveira, Conceptrice Développeuse d`&apos;Applications </h4>
          <p className="hero-container__p">Le Code à l&apos;Esprit Créatif</p>
        </section>

        <section className="hero-container__avatar">
          <Image
            className="hero-container__img"
            src='/CanailleDev/avatar1.png'
            alt="avatar CD"         
            height={200}
            width={200}
            priority
            loading="eager"
          />
        </section>
          <Apropos/>
        
      </div>
    </>
  );
}
