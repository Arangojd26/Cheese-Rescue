import React from "react";
import "./Home.page.scss";

const Home = () => {
  return (
    <>
      <div className="o-layer-background" />
      <div className="container-fluid">
        <div className="o-title-welcome">Bienvenido</div>
        <div className="o-container-start">
            <button className="o-btn-start fas fa-play-circle display-1"></button>
            <div className="o-text-jugar">Jugar</div>
        </div>
      </div>
    </>
  );
};

export default Home;
