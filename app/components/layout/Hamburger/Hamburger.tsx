"use client";

import { useEffect, useRef, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import "./Hamburger.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

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
      <div className={`hamburger-wrapper ${open ? "is-open" : ""}`}>
        <button
          ref={buttonRef}
          aria-controls={menuId}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="hamburger-button"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? (
            <IoMdClose aria-hidden="false" />
          ) : (
            <CiMenuBurger aria-hidden="false" />
          )}
        </button>

        <nav
          id={menuId}
          className={`hamburger-menu ${open ? "is-open" : "is-closed"}`}
          aria-hidden={!open}
        >
          <ul className="hamburger-menu__list">
            <li><Link onClick={onLinkClick} href="/">ACCUEIL</Link></li>
            <li><a onClick={onLinkClick} href="#apropos" >A PROPOS</a></li>
            <li><a onClick={onLinkClick} href="#skills" >SKILLS</a></li>
            <li><a onClick={onLinkClick} href="#projets" >PROJETS</a></li>
            <li><a onClick={onLinkClick} href="#contact" >CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
