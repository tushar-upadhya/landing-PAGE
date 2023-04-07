import React, { useEffect } from "react";
import Hero from "./Hero";
// import heroImage from "../images/hero.svg";
import { useCustomHook } from "../context/context";
import Service from "./Service";
import Contact from "./Contact";

const Home = () => {
    const { updateHomePage } = useCustomHook();

    useEffect(() => {
        updateHomePage();
    }, []);

    return (
        <>
            <Hero />
            <Service />
            <Contact />
        </>
    );
};

export default Home;
