"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import "./Hamburger.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FolderCog,
  GalleryHorizontal,
  Mail,
  Menu,
  PackageSearch,
  Presentation,
  User,
} from "lucide-react";
import Image from "next/image";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const menuId = "main-navigation";
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isMenuOpen = isDesktop || open;
  const hasWhiteMenuLinks =
    pathname === "/BBB" || pathname === "/Ocoffee" || pathname === "/Braap";

  // Fermer avec Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && !isDesktop) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    if (open && !isDesktop) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, isDesktop]);

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
    if (!isDesktop) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  }

  return (
    <div
      className={`hamburger-wrapper${isMenuOpen ? " is-open" : ""}${isVisible ? " is-visible" : " is-top"}${hasWhiteMenuLinks ? " has-white-menu-links" : ""}`}
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
        aria-expanded={isMenuOpen}
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
        className={`hamburger-menu${isMenuOpen ? " is-open" : " is-closed"}${!isVisible && !isDesktop ? " is-top-state" : ""}`}
        aria-hidden={!isMenuOpen}
        aria-label="Menu principal"
      >
        <ul className="hamburger-menu__list">
          <li>
            <Link onClick={onLinkClick} href="/#propos">
              <User size={18} className="hamburger-menu__logo" /> À propos
            </Link>
          </li>
          <li>
            <Link onClick={onLinkClick} href="/#skills">
              <FolderCog size={18} className="hamburger-menu__logo" /> Mes
              compétences
            </Link>
          </li>
          <li>
            <Link onClick={onLinkClick} href="/#projets">
              <Presentation size={18} className="hamburger-menu__logo" />
              Mes projets
            </Link>
          </li>
          <li>
            <Link onClick={onLinkClick} href="/#process">
              <PackageSearch size={18} className="hamburger-menu__logo" />
              Processus
            </Link>
          </li>
          <li>
            <Link onClick={onLinkClick} href="/#services">
              <GalleryHorizontal size={18} className="hamburger-menu__logo" />
              Prestations
            </Link>
          </li>
          <li>
            <Link onClick={onLinkClick} href="/#contact">
              <Mail size={18} className="hamburger-menu__logo" /> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(query);
      mediaQuery.addEventListener("change", onStoreChange);

      return () => mediaQuery.removeEventListener("change", onStoreChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}
