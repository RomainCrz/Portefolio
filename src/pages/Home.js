import React from "react";
import Buttons from "../components/Buttons";
import DynamicText from "../components/DynamicText";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <div className="home-main">
          <div className="main-content">
            <h1>ROMAIN CEREZO</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
