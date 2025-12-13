import "../aPropos/Apropos.scss";

export default function Apropos() {
  return(
    <div className="container-apropos">
      <h2 className="container-apropos__h2">À propos de moi</h2>
      <div className="container-apropos__underline"></div>

      <section className="container-apropos__texte">
      <p className="container-apropos__p">
        Après une reconversion professionnelle, j’ai transformé ma curiosité pour le numérique en métier : conceptrice développeuse d’applications et développeuse web.
      </p>

      <p className="container-apropos__p">
        Aujourd`&apos;hui, je conçois des applications avec passion, rigueur et créativité, avec une volonté constante d`&apos;apprendre et de proposer des interfaces agréables et un code propre.
      </p>

      </section>
    </div>
  )
}
