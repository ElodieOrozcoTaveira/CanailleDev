import '../button/Button.scss';
import Image from 'next/image';

export default function Button() {
    return(
       <section className="hero-container__button">
          <div className="hero-container__github">
            <a
              href="https://github.com/ElodieOrozcoTaveira"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-container__link"
            >
              <Image
                className="hero-container__githubLogo"
                src="/Icones/github.png"
                alt="logo github"
                priority
                height={15}
                width={15}
              />
              <h3 className="hero-container__h3">Github</h3>
            </a>
          </div>
          <div className="hero-container__linkedin">
            <a
              href="https://www.linkedin.com/in/elodieorozcotaveira"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-container__link"
            >
              <Image
                className="hero-container__linkedinLogo"
                src="/Icones/linkedin.png"
                alt="logo linkedin"
                priority
                height={23}
                width={23}
              />
              <h3 className="hero-container__h3">LinkedIn</h3>
            </a>
          </div>
        </section>
    )
}