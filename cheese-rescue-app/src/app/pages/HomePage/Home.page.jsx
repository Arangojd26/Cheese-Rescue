import React from "react";
import ButtonStart from "../../components/Home/ButtonStart/ButtonStart.component";
import "./Home.page.scss";

const Home = () => {
  return (
    <div>
      <div className="o-layer-background" />
      <div className="container-fluid">
        <div className="o-container-start">
          <ButtonStart />
          <div className="o-text-jugar">Jugar</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
