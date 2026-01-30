"use client";

import { useEffect, useRef, useState } from "react";
import "./Hamburger.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { AtSign, Cog, House, Presentation, UserRound, X } from "lucide-react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const menuId = "main-navigation";
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    function onScroll() {
      if (open) setOpen(false);
      setVisible(false);
    }

    function onScrollStop() {
      setVisible(true);
    }

    let scrollTimeout: NodeJS.Timeout;
    window.addEventListener("scroll", onScroll);

    const handleScrollStop = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(onScrollStop, 500);
    };

    window.addEventListener("scroll", handleScrollStop);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleScrollStop);
      clearTimeout(scrollTimeout);
    };
  }, [open]);

  function onLinkClick() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  return (
    <>
      <div
        className={`hamburger-wrapper ${open ? "is-open" : ""} ${
          !visible ? "is-hidden" : ""
        }`}
      >
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
            <Image
              src="/CanailleDev/newlogo.png"
              alt="Ouvrir le menu"
              width={55}
              height={55}
              className="hamburger-icon"
              priority
            />
          )}
        </button>

        <nav
          id={menuId}
          className={`hamburger-menu ${open ? "is-open" : "is-closed"}`}
          aria-hidden={!open}
        >
          <ul className="hamburger-menu__list">
            <li>
              <Link onClick={onLinkClick} href="/">
                <House color="#c0b47e" />
              </Link>
            </li>
            <li>
              <a onClick={onLinkClick} href="#apropos">
                <UserRound color="#c0b47e"/>
              </a>
            </li>
            <li>
              <a onClick={onLinkClick} href="#skills">
                <Cog color="#c0b47e"/>
              </a>
            </li>
            <li>
              <a onClick={onLinkClick} href="#projets">
                <Presentation color="#c0b47e"/>
              </a>
            </li>
            <li>
              <a onClick={onLinkClick} href="#contact">
                <AtSign color="#c0b47e"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}