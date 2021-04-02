import React from "react";
import './ContainerPlayer.component.scss';

const ContainerPlayer = (props) => {
  return (
    <div className="w-100 d-flex justify-content-start ml-4">
      <div className="o-container-controls-player">
        { props.children }
      </div>
    </div>
  );
};

export default ContainerPlayer;
