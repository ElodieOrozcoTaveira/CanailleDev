import "../Braap/Braap.scss";
import Image from "next/image";
import CanailleDev from "../components/canailledev/CanailleDev";
import Footer from "../components/layout/Footer/Footer";
import Fleche from "../components/Fleche/Fleche";
import { SparkleIcon, SparklesIcon } from "lucide-react";

export default function Braap() {
  return (
    <>
      <CanailleDev />
      <section className="container-braap__section">
        <Image
          className="container-braap__img"
          src="/Projets/braap.png"
          alt="logo de braap"
          width={420}
          height={320}
          quality={88}
        />
        <h1 className="container-braap__h1">Braap!</h1>
        <div className="container-braap__underline"></div>
        <p className="container-braap__paragraph">
          Braap est une application mobile dédiée aux motards de piste amateurs,
          leur permettant d’organiser leurs journées de roulage, de consulter
          les informations des circuits et la météo, de gérer un planning et une
          checklist, ainsi que de partager leur expérience avec un groupe de
          riders. Chaque utilisateur peut créer ou rejoindre une journée, suivre
          ses sessions, noter ses performances et conserver un historique
          personnel. L’application est développée en <strong>React Native</strong> avec
          <strong> TypeScript</strong> pour le front-end, et s’appuie sur <strong>Supabase</strong> comme backend
          (authentification, base de données PostgreSQL et API), offrant une
          architecture moderne, simple et scalable adaptée à une application
          mobile collaborative.
        </p>
        <h4 className="container-braap__h4">
          <SparklesIcon size={16} />..Application en cours de construction.. <SparklesIcon  size={16}/>
        </h4>
      </section>
      <Fleche/>
      <Footer />
    </>
  );
}
