import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
    const [dark, setDark] = useState(true);

    const changeToLightMode = () => {
        if (dark) {
            setDark(false);
        } else {
            setDark(true);
        }
    };

    return (
        <div className={`${dark ? "app darkMode" : "app lightMode"}`}>
            <Navigation dark={dark} onClick={changeToLightMode} />
            <Hero />
            <Experience />
            <Skills />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
