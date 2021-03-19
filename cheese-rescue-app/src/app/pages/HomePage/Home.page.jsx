import React from "react";
import "./Home.page.scss";
// import { withRouter } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="o-layer-background" />
      <div className="container-fluid">
        <div className="o-title-welcome">Bienvenido</div>
        <div className="o-container-start">
            <button type="button" className="o-btn-start fas fa-play-circle display-1" onClick={() => props.history.push('/player')}></button>
            <div className="o-text-jugar">Jugar</div>
        </div>
      </div>
    </>
  );
};

export default Home;
