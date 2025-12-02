"use client";

import Link from "next/link";
import Hamburger from "../Hamburger/Hamburger";
import "./Hero.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <header className="header-container">
        <div className="container-logo">
          <Link href='/'>
          <Image
            className="container-logo__img"
            src="/Logo/logo.png"
            alt="logo canailledev"
            width={40}
            height={40}
          />
          </Link>
          <h1 className="container-logo__canailledev">CanailleDev</h1>
        </div>

        <div className="container-menu">
          <Hamburger />
        </div>
      </header>
      <div className="hero-container">
        <section className="hero-container__bienvenue">
          <h2 className="hero-container__h2">
            Bienvenue sur <span>CanailleDev</span>
          </h2>
          <h3 className="hero-container__EOT">by Elodie Orozco Taveira </h3>
          <p className="hero-container__p">Le Code à l&apos;Esprit Créatif</p>
        </section>

        <section className="hero-container__avatar">
          <Image
            className="hero-container__img"
            src="/Logo/avatar.png"
            alt="avatar canailledev"
            priority
            height={180}
            width={180}
            style={{ width: "auto", height: "auto" }}
          />
        </section>
        <section className="hero-container__button">
          <div className="hero-container__github">
            <Image
              className="hero-container__githubLogo"
              src="/Icones/github.png"
              alt="logo github"
              priority
              height={15}
              width={15}
            />
            <h3 className="hero-container__h3">Github</h3>
          </div>
          <div className="hero-container__linkedin">
            <Image
              className="hero-container__linkedinLogo"
              src="/Icones/linkedin.png"
              alt="logo github"
              priority
              height={23}
              width={23}
            />
            <h3 className="hero-container__h3">Lindekin</h3>
          </div>
        </section>
      </div>
    </>
  );
}
