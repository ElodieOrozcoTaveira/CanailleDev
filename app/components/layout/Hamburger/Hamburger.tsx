"use client";

import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import "./Hamburger.scss";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const menuId = "main-navigation";
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function onLinkClick() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <>
      <div className="hamburger-wrapper">
        <button
          ref={buttonRef}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="hamburger-button"
          onClick={() => setOpen((s) => !s)}
        >
          <CiMenuBurger />
        </button>

        <nav
          id={menuId}
          className={`hamburger-menu ${open ? "is-open" : "is-closed"}`}
          aria-hidden={!open}
        >
          <ul className="hamburger-menu__list">
            <li>
              <a href="#apropos" onClick={onLinkClick}>
                A propos
              </a>
            </li>
            <li>
              <a href="#skills" onClick={onLinkClick}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projets" onClick={onLinkClick}>
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" onClick={onLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
