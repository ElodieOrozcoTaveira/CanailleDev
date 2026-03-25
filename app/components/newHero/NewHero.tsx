import Link from "next/link";
import CanailleDev from "../canailledev/CanailleDev";
import "../newHero/newHero.scss";
import { ChevronDown, Sparkle } from "lucide-react";

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
    <>
      <div className="hero-container">
        <CanailleDev />
        <h3 className="hero-container__dispo">
          <Sparkle size={10} /> Disponible pour de nouveaux projets{" "}
          <Sparkle size={10} />
        </h3>
        <h2 className="hero-container__E">Elodie</h2>
        <h2 className="hero-container__OT">Orozco Taveira</h2>
        <h3 className="hero-container__h3">Développeuse Web Junior</h3>
        <p className="hero-container__p">
          Spécialisée en{" "}
          <span className="hero-container__rolling" aria-label="Technologies">
            <span className="hero-container__rollingTrack">
              {roulement.map((word) => (
                <span key={word} className="hero-container__span">
                  {word}
                </span>
              ))}
              <span className="hero-container__span">{roulement[0]}</span>
            </span>
          </span>
        </p>
        <p className="hero-container__p1">
          Des interfaces claires, du code solide, des projets qui avancent.
        </p>

        <div className="hero-container__contbuton">
          <Link href="#contact" className="hero-container__button1">
            Me contacter
          </Link>
          <Link href="#projets" className="hero-container__button2">
            Voir mes Projets
          </Link>
          <div className="hero-container__arrow">
            <ChevronDown color="#fff" />
          </div>
        </div>
      </div>
    </>
  );
}
