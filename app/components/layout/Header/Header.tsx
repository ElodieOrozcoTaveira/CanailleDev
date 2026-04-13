"use client";

import "../Header/Header.scss";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "../Hamburger/Hamburger";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const hasWhiteDesktopLinks =
    pathname === "/BBB" || pathname === "/Ocoffee" || pathname === "/Braap";

  return (
    <>
      <header className="header-container">
        <div className="container-logo">
          <Link href="/">
            <Image
              className="container-logo__img"
              src="/CanailleDev/logoCD.webp"
              alt="logo canailledev"
              width={45}
              height={45}
              loading="lazy"
            />
          </Link>
          <h1 className="container-logo__canailledev">
            Elo<span className="container-logo__span">Dev</span>
          </h1>
          <section
            className={`menu-desktop${hasWhiteDesktopLinks ? " menu-desktop--white-links" : ""}`}
          >
            <ul className="menu-desktop__ul">
              <Link href="/" className="menu-desktop__link">
                Accueil
              </Link>
              <li>
                <a href="/#propos" className="menu-desktop__link">
                  A propos
                </a>
              </li>
              <li>
                <a href="/#skills" className="menu-desktop__link">
                  Skills
                </a>
              </li>
              <li>
                <a href="/#projets" className="menu-desktop__link">
                  Mes projets
                </a>
              </li>
              <li>
                <a href="/#contact" className="menu-desktop__link">
                  Contact
                </a>
              </li>
            </ul>
          </section>
          <div className="container-menu">
            <Hamburger />
          </div>
        </div>
      </header>
    </>
  );
}
