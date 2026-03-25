import { Sparkle } from "lucide-react";
import "../aPropos/Apropos.scss";
import Image from "next/image";

export default function Apropos() {
  return (
    <div className="container-apropos">
      <h2 className="container-apropos__h2">À propos de moi</h2>
      <div className="container-apropos__underline"></div>

      <Image
        src="/CanailleDev/Pro/portrait-hq.webp"
        alt="photo portrait"
        width={280}
        height={420}
        quality={100}
        sizes="(max-width: 768px) 70vw, 280px"
        className="container-apropos__image"
      />

      <h3 className="container-apropos__nom">Elodie Orozco Taveira</h3>
      <h4 className="container-apropos__dev">
        Développeuse Web Junior Front End
      </h4>
     
      <section className="container-apropos__texte">
        <p className="container-apropos__p">
          Développeuse web freelance, je conçois des applications modernes,
          performantes et centrées sur l’utilisateur.
        </p>

        <p className="container-apropos__p">
          Issue d’une reconversion professionnelle, j’ai choisi de quitter ma carrière dans la surêté ferroviaire afin de m’orienter
          vers le développement web pour allier logique, créativité et
          résolution de problèmes. Cette transition m’a permis de développer une
          forte capacité d’adaptation, de la rigueur et un réel sens du détail.
        </p>

        <p className="container-apropos__p">
          Aujourd’hui, je développe des interfaces claires, accessibles et
          maintenables, avec une attention particulière portée à l’expérience
          utilisateur et à la qualité du code.
        </p>

        <p className="container-apropos__p">
          Curieuse et en constante évolution, je continue d’apprendre chaque
          jour pour proposer des solutions modernes, fiables et adaptées aux
          besoins de chaque projet.
        </p>
      </section>
       <p className="container-apropos__intro">
        <Sparkle size={12} />  Rigueur, précision et sens du détail au service de vos projets web <Sparkle size={12} />
      </p>
    </div>
  );
}
