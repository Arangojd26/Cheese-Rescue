import React from "react";
import Loader from "react-loader-spinner";
import "./Loading.component.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import iconFullScreen from '../../../../assets/img/fullscreen.png';
import iconRotate from '../../../../assets/img/screen-rotate.png';
import iconLucky from '../../../../assets/img/lucky.png';

const Loading = () => {
  return (
    <div className="o-container-loader">
      <div className="o-content-carousel">
        <Carousel showThumbs={false} autoPlay={true} emulateTouch={true} interval={5000} showArrows={false}>
          <div key="slide1" className="o-slide-carousel">
            <div className="o-container-icon">
              <img src={iconFullScreen} alt="fullscreen" style={{width: '5rem'}}/>
            </div>
            <h5 className=" o-text-carousel">Presiona el botón de pantalla completa para tener una mejor experiencia</h5>
          </div>
          <div key="slide2" className="o-slide-carousel">
            <div className="o-container-icon">
              <img src={iconRotate} alt="fullscreen" style={{width: '5rem'}}/>
            </div>
            <h5 className="o-text-carousel">Si estás en un teléfono móvil, activa la rotación horizontal por favor</h5>
          </div>
          <div key="slide3" className="o-slide-carousel">
            <div className="o-container-icon">
              <img src={iconLucky} alt="fullscreen" style={{width: '5rem'}}/>
            </div>
            <h5 className="font-weight-light o-text-carousel">¡Mucha suerte!</h5>
          </div>
        </Carousel>
      </div>
      
      <div className="o-content-loader">
        <div className="o-text-loading font-weight-light">Cargando</div>
        <Loader
          className="o-loader"
          type="ThreeDots"
          color="#ffffff"
          height={80}
          width={80}
          timeout={15000}
        />
      </div>
    </div>
  );
};

export default Loading;
