import React from "react";
import "./Preview.component.scss";
import imgPreview1 from "../../../../assets/img/preview1.png";
import imgPreview2 from "../../../../assets/img/preview2.png";
import imgPreview3 from "../../../../assets/img/preview3.png";
import imgMouse from "../../../../assets/img/mouse.png";

const Preview = ({ view }) => {
  const [modal, setModal] = React.useState("o-container-preview-in");
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2600);
  }, []);

  const controlModal = (stateModal) => {
    setModal("o-container-preview-out");
    setTimeout(() => {
      setShow(stateModal);
    }, 950);
  };

  return show ? (
    <div className={modal}>
      <div className="o-content-preview">
        <img
          className="o-preview"
          src={
            view === "v1"
              ? imgPreview1
              : view === "v2"
              ? imgPreview2
              : view === "v3"
              ? imgPreview3
              : null
          }
          alt="preview"
        />
        <div className="o-container-button-check">
          <button
            className="o-button-check"
            onClick={() => controlModal(!show)}
          >
            Responder
          </button>
          <img className="o-img-mouse" src={imgMouse} alt="mouse" />
        </div>
      </div>
    </div>
  ) : null;
};

export default Preview;
