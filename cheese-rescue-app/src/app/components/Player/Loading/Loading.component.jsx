import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.component.scss";

const Loading = () => {
  return (
    <div className="o-container-loader">
      <div className="o-content-loader">
        <div className="o-text-loading">Cargando</div>
        <Loader
          className="o-loader"
          type="ThreeDots"
          color="#ffffff"
          height={80}
          width={80}
          timeout={3000}
        />
      </div>
    </div>
  );
};

export default Loading;
