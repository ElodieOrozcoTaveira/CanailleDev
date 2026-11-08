import Image from "next/image";
import "./Apropos.scss";

const values = [
  { title: "Rigueur", text: "Un code propre et testé" },
  { title: "Précision", text: "Fidèle à la maquette" },
  { title: "Détail", text: "Chaque pixel compte" },
];

export default function Apropos() {
  return (
    <section id="propos" className="home-about" aria-labelledby="about-title">
      <div className="home-about__media">
        <Image
          src="/CanailleDev/Pro/portrait-hq.webp"
          alt="Portrait d'Elodie Orozco Taveira"
          width={880}
          height={1100}
          sizes="(max-width: 768px) 90vw, 440px"
          className="home-about__photo"
        />
        <div className="home-about__card">
          <p className="home-about__name">Elodie Orozco Taveira</p>
          <p className="home-about__role">
            Développeuse web front-end · Freelance
          </p>
        </div>
      </div>

      <div className="home-about__text">
        <p className="home-about__eyebrow">À propos</p>
        <h2 id="about-title" className="home-about__title">
          {"De la sûreté ferroviaire au code : la rigueur en héritage."}
        </h2>
        <p className="home-about__p">
          Issue d&apos;une reconversion professionnelle, j&apos;ai quitté la
          sûreté ferroviaire pour le développement web, afin d&apos;allier
          logique, créativité et résolution de problèmes. J&apos;y ai gagné une
          forte capacité d&apos;adaptation et un vrai sens du détail.
        </p>
        <p className="home-about__p">
          Aujourd&apos;hui, je développe des interfaces claires, accessibles et
          maintenables, avec une attention particulière à l&apos;expérience
          utilisateur et à la qualité du code.
        </p>

        <ul className="home-about__values">
          {values.map((value) => (
            <li key={value.title} className="home-about__value">
              <span className="home-about__value-title">{value.title}</span>
              <span className="home-about__value-text">{value.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
