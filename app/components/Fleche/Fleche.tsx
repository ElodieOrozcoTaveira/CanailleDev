"use client";

import "../Fleche/Fleche.scss";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Fleche() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollToTop();
    }
  };

  return (
    <div
      className="btn_arrow"
      role="button"
      tabIndex={0}
      aria-label="Remonter en haut"
      onClick={scrollToTop}
      onKeyDown={onKeyDown}
    >
      <FaArrowCircleUp className="icone" size={24} />
    </div>
  );
}
