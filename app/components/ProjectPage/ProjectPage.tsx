import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Footer from "../layout/Footer/Footer";
import Fleche from "../Fleche/Fleche";
import "./ProjectPage.scss";

type Media =
  | { kind: "video"; sources: { src: string; type: string }[] }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      // "phone" : image verticale affichée comme un écran de téléphone
      variant?: "phone";
    };

type Fact = { label: string; value: string };

type ProjectPageProps = {
  tag: string;
  title: string;
  subtitle?: string;
  stack: string[];
  media: Media;
  facts: Fact[];
  link?: { href: string; label: string };
  notice?: string;
  children: React.ReactNode;
};

// Gabarit commun aux pages projets (BlaBlaBook, Braap, Nana's Coffee)
export default function ProjectPage({
  tag,
  title,
  subtitle,
  stack,
  media,
  facts,
  link,
  notice,
  children,
}: ProjectPageProps) {
  return (
    <div className="project-page">
      <section className="project-page__hero">
        <div className="project-page__hero-inner">
          <Link href="/#projets" className="project-page__back">
            <ArrowLeft size={18} aria-hidden="true" />
            Tous les projets
          </Link>

          <p className="project-page__tag">{tag}</p>
          <h1 className="project-page__title">{title}</h1>
          {subtitle && <p className="project-page__subtitle">{subtitle}</p>}

          <ul className="project-page__stack" aria-label="Technologies utilisées">
            {stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </section>

      <div className="project-page__media-wrap">
        <div
          className={`project-page__media project-page__media--${media.kind}`}
        >
          {media.kind === "video" ? (
            <video
              className="project-page__video"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              {media.sources.map((source) => (
                <source key={source.src} src={source.src} type={source.type} />
              ))}
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : (
            <Image
              className={`project-page__image${media.variant === "phone" ? " project-page__image--phone" : ""}`}
              src={media.src}
              alt={media.alt}
              width={media.width}
              height={media.height}
              sizes={
                media.variant === "phone"
                  ? "280px"
                  : "(max-width: 768px) 90vw, 560px"
              }
              priority
            />
          )}
        </div>
      </div>

      <section className="project-page__body">
        <div className="project-page__content">
          <h2 className="project-page__h2" data-no-animated-h2="true">
            Le projet
          </h2>
          {children}
          {notice && <p className="project-page__notice">{notice}</p>}
        </div>

        <aside className="project-page__facts" aria-label="En bref">
          <dl className="project-page__list">
            {facts.map((fact) => (
              <div key={fact.label} className="project-page__fact">
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          {link && (
            <a
              href={link.href}
              className="project-page__visit"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </aside>
      </section>

      <section className="project-page__cta">
        <div className="project-page__cta-inner">
          <h2 className="project-page__cta-title" data-no-animated-h2="true">
            Un projet similaire en tête&nbsp;?
          </h2>
          <Link href="/#contact" className="project-page__cta-button">
            Parlons-en
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <Footer />
      <Fleche />
    </div>
  );
}
