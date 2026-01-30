'use client';

import Footer from "./components/layout/Footer/Footer";
import Fleche from "./components/Fleche/Fleche";
import NewHero from "./components/newHero/NewHero";
import NewApropos from "./components/newApropos/NewApropos";
import NewSkills from "./components/newSkills/newSkills";
import NewProject from "./components/newProject/NewProject";
import NewPrestations from "./components/NewPrestations/NewPrestations";
import Contact from "./components/contact/Contact";

export default function Home() {

    return(
        
        <>

        <section className="hero"><NewHero/></section>
        <section className="propos"><NewApropos/></section>
        <section id="skills" className="skills"><NewSkills/></section>
        <section id="projets" className="projects"><NewProject/></section>
        <section className="services"><NewPrestations/></section>
        <section id="contact" className="contact"><Contact/></section>
        <section className="footer"><Footer/></section>
        <Fleche/>
        </>
    )
}