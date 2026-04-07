"use client";

import { ChevronUp } from "lucide-react";
import "../Fleche/Fleche.scss";

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
      <ChevronUp className="icone" size={30} color=" rgb(12, 188, 15)" />
    </div>
  );
}
