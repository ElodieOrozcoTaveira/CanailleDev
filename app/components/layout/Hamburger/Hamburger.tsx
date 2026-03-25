"use client";

import { useEffect, useRef, useState } from "react";
import "./Hamburger.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuId = "main-navigation";
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Fermer avec Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Afficher la barre complète après scroll
  useEffect(() => {
    function onScroll() {
      const hasScrolled = window.scrollY > 20;
      setIsVisible(hasScrolled);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function onLinkClick() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <div
      className={`hamburger-wrapper${open ? " is-open" : ""}${isVisible ? " is-visible" : " is-top"}`}
    >
      <Link
        href="/"
        className="hamburger-brand"
        aria-label="Retour à l'accueil"
      >
        <Image
          className="hamburger-brand__logo"
          src="/CanailleDev/newlogo.png"
          alt="logo canailledev"
          width={40}
          height={40}
          priority
        />
        <span className="hamburger-brand__text">
          Canaille<span className="hamburger-brand__accent">Dev</span>
        </span>
      </Link>

      <button
        ref={buttonRef}
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        className="hamburger-button"
        onClick={() => setOpen((s) => !s)}
      >
        {open ? (
          <IoMdClose aria-hidden="true" />
        ) : (
          <Menu size={40} className="hamburger-icon" aria-hidden="true" />
        )}
      </button>

      <nav
        id={menuId}
        className={`hamburger-menu${open ? " is-open" : " is-closed"}${!isVisible ? " is-top-state" : ""}`}
        aria-hidden={!open}
        aria-label="Menu principal"
      >
        <ul className="hamburger-menu__list">
          <li>
            <Link onClick={onLinkClick} href="/">
              Accueil
            </Link>
          </li>
          <li>
            <a onClick={onLinkClick} href="#apropos">
              À propos
            </a>
          </li>
          <li>
            <a onClick={onLinkClick} href="#skills">
              Compétences
            </a>
          </li>
          <li>
            <a onClick={onLinkClick} href="#projets">
              Projets
            </a>
          </li>
          <li>
            <a onClick={onLinkClick} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
