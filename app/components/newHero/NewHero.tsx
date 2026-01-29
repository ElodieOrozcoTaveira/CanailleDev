import Hamburger from "../layout/Hamburger/Hamburger";
import "../newHero/newHero.scss";
import Image from "next/image";

export default function NewHero() {
  return (
    <>
    <Hamburger/>
      <div className="hero-container">
        <section className="hero-container__leftside">
          <div className="hero-container__vertical">Canaille<span className="hero-container__dev">Dev</span></div>
        </section>
        <section className="hero-container__rightside">
          <div className="hero-container__content">
            <div className="hero-container__title">
              Conceptrice Développeuse d&apos;Applications
            </div>
            <div className="hero-container__subtitle">Développeuse Junior</div>
            <div className="hero-container__reseaux">
                <a className="hero-container__a" href="https://www.linkedin.com/in/elodieorozcotaveira/">
              <div className="hero-container__btnreseaux1">LinkedIn</div></a>
              <a className="hero-container__a" href="https://github.com/ElodieOrozcoTaveira">
              <div className="hero-container__btnreseaux2">Github</div></a>
            </div>
            <div className="hero-container__nbrprojet">Projet: <span className="hero-container__span">1</span></div>
            <div className="hero-container__EOT">by Elodie Orozco Taveira</div>
          </div>
        </section>

        <section className="hero-container__avatar">
          <Image
            className="hero-container__img"
            src="/CanailleDev/avatar1.png"
            alt="avatar"
            height={350}
            width={260}
            priority
            loading="eager"
          />
        </section>
      </div>
    </>
  );
}
