'use client';

import MesProjets from "./components/MesProjets/MesProjets";
import Footer from "./components/layout/Footer/Footer";
import Contact from "./components/contact/Contact";
import Prestations from "./components/Prestations/Prestations";
import Fleche from "./components/Fleche/Fleche";
import NewHero from "./components/newHero/NewHero";
import NewApropos from "./components/newApropos/NewApropos";
import NewSkills from "./components/newSkills/newSkills";

export default function Home() {

    return(
        
        <>

        <section className="hero"><NewHero/></section>
        <section className="propos"><NewApropos/></section>
        <section id="skills" className="skills"><NewSkills/></section>
        <section id="projets" className="projects"><MesProjets/></section>
        <section className="services"><Prestations/></section>
        <section id="contact" className="contact"><Contact/></section>
        <section className="footer"><Footer/></section>
        <Fleche/>
        </>
    )
}