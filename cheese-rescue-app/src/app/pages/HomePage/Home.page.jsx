import React from "react";
import ButtonStart from "../../components/Home/ButtonStart/ButtonStart.component";
import "./Home.page.scss";
// import { withRouter } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="o-layer-background" />
      <div className="container-fluid">
        {/* <div className="o-title-welcome">Bienvenido</div> */}
        <div className="o-container-start">
          <ButtonStart />
          <div className="o-text-jugar">Jugar</div>
        </div>
      </div>
    </>
  );
};

export default Home;
