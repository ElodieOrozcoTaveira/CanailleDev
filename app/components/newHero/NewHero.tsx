import Image from "next/image";
import Link from "next/link";
import "../newHero/newHero.scss";
import { ChevronDown, Rocket, Sparkle } from "lucide-react";

export default function Hero() {
  const roulement = [
    "Front End",
    "React",
    "NextJs",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "Angular",
  ];

  return (
    <section className="hero-container">
      {/* 1. L'IMAGE DE FOND OPTIMISÉE (Z-INDEX LE PLUS BAS) */}
      <Image
        src="/CanailleDev/Pro/bg.webp"
        alt="Fond abstrait CanailleDev"
        fill
        className="hero-bg-image"
        priority // Charge l'image immédiatement (LCP Boost)
        quality={100} // Qualité max pour éviter le flou
        sizes="(max-width: 480px) 220vw, (max-width: 768px) 170vw, 100vw"
        style={{
          objectFit: "cover",
          objectPosition: "50% 0%", // Ajusté à 10% pour "monter" l'image
          zIndex: -1,
        }}
      />

      {/* 2. L'OVERLAY (LINEAR GRADIENT) : Entre l'image et le texte */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(2, 107, 2, 0.35), rgba(6, 76, 6, 0.35))",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>

      {/* 3. LE CONTENU (Z-INDEX 1 PAR DÉFAUT VIA LE SCSS OU INLINE) */}
      <h2 className="hero-container__dispo">
        <Sparkle size={10} /> Disponible pour de nouveaux projets{" "}
        <Sparkle size={10} />
      </h2>

      <h3 className="hero-container__E">Elodie</h3>
      <h3 className="hero-container__OT">Orozco Taveira</h3>

      {/* H1 pour le SEO et l'Accessibilité */}
      <h4 className="hero-container__h3">
        Conceptrice Développeuse d&apos;Applications Web Junior
      </h4>

      <p className="hero-container__p">
        Spécialisée en{" "}
        <span className="hero-container__rolling" aria-label="Technologies">
          <span className="hero-container__rollingTrack">
            {roulement.map((word, index) => (
              <span key={index} className="hero-container__span">
                {word}
              </span>
            ))}
            <span className="hero-container__span">{roulement[0]}</span>
          </span>
        </span>
      </p>

      {/*<p className="hero-container__p1">
        Des interfaces claires, du code solide, des projets qui avancent.
      </p>*/}

      <div className="hero-container__contbuton">
        <Link href="#contact" className="hero-container__button1">
          Me contacter
        </Link>
        <Link href="#projets" className="hero-container__button2">
          <Rocket className="hero-container__rocket" size={18} /> Voir mes
          Projets
        </Link>
        <div className="hero-container__arrow">
          <ChevronDown
            size={30}
            fontWeight="bold"
            className="hero-container__chevron"
          />
        </div>
      </div>
    </section>
  );
}
