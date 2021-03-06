import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";

const Project1 = () => {
    return (
        <main>
            <Mouse />
            <div className="project">
                <Navigation />
                <Logo />
                <Projects projectNumber={0} />
                <Buttons left={"/"} right={"/projet-2"} />
            </div>
        </main>
    );
};

export default Project1;
