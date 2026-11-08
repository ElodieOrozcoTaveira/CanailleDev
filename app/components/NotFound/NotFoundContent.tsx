import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer/Footer";
import "./NotFoundContent.scss";

export default function NotFoundContent() {
  return (
    <div className="not-found">
      <section className="not-found__inner">
        <div className="not-found__text">
          <p className="not-found__code">Erreur 404</p>
          <h1 className="not-found__title">Oups, cette page s&apos;est perdue en montagne.</h1>
          <p className="not-found__lead">
            La page que vous recherchez n&apos;existe pas ou a été déplacée.
          </p>
          <Link href="/" className="not-found__button">
            <ArrowLeft size={18} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
        </div>
        <Image
          className="not-found__img"
          src="/CanailleDev/404news.png"
          alt=""
          width={612}
          height={408}
          priority
        />
      </section>
      <Footer />
    </div>
  );
}
