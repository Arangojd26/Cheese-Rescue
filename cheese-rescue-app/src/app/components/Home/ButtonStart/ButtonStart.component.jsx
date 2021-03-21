import React from "react";
import "./ButtonStart.component.scss";
import { withRouter } from "react-router-dom";

const ButtonStart = (props) => {

  const openLoader = () => {

    props.history.push("/player");
       
  };

  return (
    <>
      <button
        type="button"
        className="o-btn-start fas fa-play-circle fa-7x"
        onClick={() => openLoader()}
      />
    </>
  );
};

export default withRouter(ButtonStart);
