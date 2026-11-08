import "./Processus.scss";

const etapes = [
  {
    numero: "01",
    titre: "Échange",
    texte:
      "On parle de votre vision, de vos objectifs et de votre audience pour définir la bonne direction.",
  },
  {
    numero: "02",
    titre: "Design",
    texte:
      "Je crée une maquette visuelle complète, que vous validez avant le développement.",
  },
  {
    numero: "03",
    titre: "Développement",
    texte:
      "Code propre, performant et responsive. Vous suivez l'avancement du projet.",
  },
  {
    numero: "04",
    titre: "Livraison",
    texte:
      "Tests finaux et mise en ligne. Je reste disponible après le lancement.",
  },
];

export default function Processus() {
  return (
    <section id="process" className="home-steps" aria-labelledby="steps-title">
      <div className="home-steps__inner">
        <div className="home-steps__head">
          <p className="home-steps__eyebrow">Méthode</p>
          <h2 id="steps-title" className="home-steps__title">
            4 étapes, zéro surprise.
          </h2>
          <p className="home-steps__intro">
            Une méthode claire et transparente, de notre premier échange
            jusqu&apos;à la mise en ligne.
          </p>
        </div>

        <ol className="home-steps__list">
          {etapes.map((etape) => (
            <li key={etape.numero} className="home-steps__item">
              <span className="home-steps__number" aria-hidden="true">
                {etape.numero}
              </span>
              <h3 className="home-steps__name">{etape.titre}</h3>
              <p className="home-steps__text">{etape.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
