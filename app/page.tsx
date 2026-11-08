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

// Chaque composant porte sa propre balise <section id="..."> (ancres du menu)
export default function Home() {
  return (
    <div className="home">
      <Hero />
      <Apropos />
      <NewProject />
      <NewSkills />
      <Processus />
      <NewPrestations />
      <Contact />
      <Footer />
      <Fleche />
    </div>
  );
}
