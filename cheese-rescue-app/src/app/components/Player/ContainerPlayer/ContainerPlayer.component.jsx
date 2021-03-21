import React from "react";
import './ContainerPlayer.component.scss';

const ContainerPlayer = (props) => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="o-container-controls-player d-flex justify-content-around">
        { props.children }
      </div>
    </div>
  );
};

export default ContainerPlayer;
