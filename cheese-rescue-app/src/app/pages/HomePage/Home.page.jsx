import React from "react";
import ButtonStart from "../../components/Home/ButtonStart/ButtonStart.component";
import "./Home.page.scss";

const Home = () => {
  return (
    <div>
      {/* <div className="o-layer-background" /> */}
      <div className="o-container-start">
        <div className="o-content-start">
          <ButtonStart />
          <div className="o-text-jugar">Play</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
