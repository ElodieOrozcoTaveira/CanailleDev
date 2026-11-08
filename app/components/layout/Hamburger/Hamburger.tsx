"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import "./Hamburger.scss";

const links = [
  { href: "/#propos", label: "À propos" },
  { href: "/#projets", label: "Projets" },
  { href: "/#skills", label: "Compétences" },
  { href: "/#services", label: "Prestations" },
];

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Fond plein après un léger scroll (transparent en haut de l'accueil)
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu mobile avec Échap
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open || !isHome;

  return (
    <header className={`site-nav${solid ? " site-nav--solid" : ""}`}>
      <div className="site-nav__inner">
        <Link
          href="/"
          className="site-nav__brand"
          aria-label="Elodie Orozco Taveira, retour à l'accueil"
          onClick={() => setOpen(false)}
        >
          <span className="site-nav__logo" aria-hidden="true">
            EO
          </span>
          <span className="site-nav__name">
            Elodie Orozco Taveira
            <span className="site-nav__role">Développeuse web</span>
          </span>
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="site-nav__toggle"
          aria-controls="main-navigation"
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav
          id="main-navigation"
          aria-label="Menu principal"
          className={`site-nav__menu${open ? " is-open" : ""}`}
        >
          <ul className="site-nav__list">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="site-nav__link"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/#contact"
                className="site-nav__cta"
                onClick={() => setOpen(false)}
              >
                Me contacter
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
