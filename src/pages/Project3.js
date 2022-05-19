import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Project3 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={2} />
                <Buttons left={"/projet-2"} right={"/projet-4"} />
            </div>
        </main>
    );
};

export default Project3;
