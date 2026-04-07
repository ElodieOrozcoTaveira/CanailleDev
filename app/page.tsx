import dynamic from "next/dynamic";
import Footer from "./components/layout/Footer/Footer";
import Fleche from "./components/Fleche/Fleche";
import Hero from "./components/newHero/NewHero";
import Apropos from "./components/aPropos/Apropos";
const NewSkills = dynamic(() => import("./components/newSkills/newSkills"));
const NewProject = dynamic(() => import("./components/newProject/NewProject"));
const NewPrestations = dynamic(
  () => import("./components/NewPrestations/NewPrestations"),
);
const Contact = dynamic(() => import("./components/contact/Contact"));
const Processus = dynamic(() => import("./components/Services/Processus"));

export default function Home() {
  return (
    <>
      <section className="hero">
        <Hero />
      </section>
      <section className="propos">
        <Apropos />
      </section>
      <section id="skills" className="skills">
        <NewSkills />
      </section>
      <section id="projets" className="projects">
        <NewProject />
      </section>
      <section id="process" className="process">
        <Processus />
      </section>

      <section id="services">
        <NewPrestations />
      </section>
      <section id="contact" className="contact">
        <Contact />
      </section>
      <section className="footer">
        <Footer />
      </section>
      <Fleche />
    </>
  );
}
