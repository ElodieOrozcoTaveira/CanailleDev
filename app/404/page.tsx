import "../404/404.scss";
import CanailleDev from "../components/canailledev/CanailleDev";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/layout/Footer/Footer";

export default function Error() {
  return (
    <div className="error-page-wrapper">
      <CanailleDev />
      <div className="container-error">
        <Image
          className="container-error__img"
          src="/CanailleDev/404news.png"
          alt="avatar 404"
          width={260}
          height={310}
          priority
          loading="eager"
        />
      </div>
      <Link href="/" className="container-error__link">
        <div className="container-error__btn">Retour à l&apos;accueil</div>
      </Link>
      <Footer />
    </div>
  );
}
