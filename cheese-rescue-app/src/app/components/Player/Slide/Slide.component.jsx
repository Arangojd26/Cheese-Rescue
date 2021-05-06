import React from "react";
import iconFullScreen from "../../../../assets/img/fullscreen.png";
import iconRotate from "../../../../assets/img/screen-rotate.png";
import iconLucky from "../../../../assets/img/lucky.png";
import "./Slide.component.scss";

const Slide = ({ type }) => {
  const renderSlide = () => {
    let key;
    let iconSlide;
    let textSlide;

    switch (type) {
      case "fullscreen":
        key = "slide1";
        iconSlide = iconFullScreen;
        textSlide =
          "Presiona el botón de pantalla completa para tener una mejor experiencia.";
        break;
      case "rotate":
        key = "slide2";
        iconSlide = iconRotate;
        textSlide =
          "Si estás en un teléfono móvil, activa la rotación horizontal por favor.";
        break;
      case "lucky":
        key = "slide3";
        iconSlide = iconLucky;
        textSlide = "¡Mucha suerte!";
        break;

      default:
        break;
    }
    return (
      <div key={key} className="o-slide-carousel">
        <div className="o-container-icon">
          <img src={iconSlide} alt="slide" style={{ width: "5rem" }} />
        </div>
        <h5 className="o-text-carousel">{textSlide}</h5>
      </div>
    );
  };

  return renderSlide();
};

export default Slide;
