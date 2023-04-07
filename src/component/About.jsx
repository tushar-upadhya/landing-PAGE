import React from "react";
import Hero from "./Hero";
// import about1 from "../images/about1.svg";
import { useCustomHook } from "../context/context";
import { useEffect } from "react";

const About = () => {
    const { updateAboutPage } = useCustomHook();

    useEffect(() => {
        updateAboutPage();
    }, []);

    return <Hero />;
};

export default About;
