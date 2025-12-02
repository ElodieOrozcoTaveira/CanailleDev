'use client';

import { useEffect, useState } from "react";
import Apropos from "./components/aPropos/Apropos";
import Hero from "./components/layout/Hero/Hero";
import Loader from "./components/layout/Loader/Loader";

export default function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loader/>;
    }
    return(
        
        <>

        <section className="hero"><Hero/></section>
        <section className="a-propos"><Apropos/></section>
        </>
    )
}