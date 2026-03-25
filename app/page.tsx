'use client';

import Footer from "./components/layout/Footer/Footer";
import Fleche from "./components/Fleche/Fleche";
import NewSkills from "./components/newSkills/newSkills";
import NewProject from "./components/newProject/NewProject";
import NewPrestations from "./components/NewPrestations/NewPrestations";
import Contact from "./components/contact/Contact";
import Hero from "./components/newHero/NewHero";
import Apropos from "./components/aPropos/Apropos";

export default function Home() {

    return(
        
        <>

        <section className="hero"><Hero/></section>
        <section className="propos"><Apropos/></section>
        <section id="skills" className="skills"><NewSkills/></section>
        <section id="projets" className="projects"><NewProject/></section>
        <section className="services"><NewPrestations/></section>
        <section id="contact" className="contact"><Contact/></section>
        <section className="footer"><Footer/></section>
        <Fleche/>
        </>
    )
}