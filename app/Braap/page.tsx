import "../Braap/Braap.scss";
import Image from "next/image";
import Footer from "../components/layout/Footer/Footer";
import Fleche from "../components/Fleche/Fleche";
import { SparklesIcon } from "lucide-react";

export default function Braap() {
  return (
    <>
      <main className="container-braap">
        <section className="container-braap__section">
          <Image
            className="container-braap__img"
            src="/Projets/braap.png"
            alt="logo de braap"
            width={420}
            height={320}
            quality={88}
          />
          <p className="container-braap__tag">
            Application mobile collaborative
          </p>
          <h1 className="container-braap__h1">Braap!</h1>
          <div className="container-braap__underline"></div>

          <div className="container-braap__stack" aria-label="Technologies">
            <span>React Native</span>
            <span>TypeScript</span>
            <span>Supabase</span>
          </div>

          <article className="container-braap__card">
            <p className="container-braap__paragraph">
              Braap est une application mobile dédiée aux motards de piste
              amateurs, leur permettant d&apos;organiser leurs journées de
              roulage, de consulter les informations des circuits et la météo,
              de gérer un planning et une checklist, ainsi que de partager leur
              expérience avec un groupe de riders.
            </p>
            <p className="container-braap__paragraph">
              Chaque utilisateur peut créer ou rejoindre une journée, suivre ses
              sessions, noter ses performances et conserver un historique
              personnel. L&apos;application est développée en
              <strong> React Native</strong> avec <strong>TypeScript</strong>{" "}
              pour le front-end, et s&apos;appuie sur <strong>Supabase</strong>{" "}
              comme backend (authentification, base de données PostgreSQL et
              API), offrant une architecture moderne, simple et scalable adaptée
              à une application mobile collaborative.
            </p>
          </article>

          <h4 className="container-braap__h4">
            <SparklesIcon size={16} /> Application en cours de construction
            <SparklesIcon size={16} />
          </h4>
        </section>
      </main>
      <Fleche />
      <Footer />
    </>
  );
}
