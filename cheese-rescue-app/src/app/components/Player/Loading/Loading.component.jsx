import React from "react";
import Loader from "react-loader-spinner";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "../Slide/Slide.component";
import "./Loading.component.scss";

const Loading = () => {
  return (
    <div className="o-container-loader">
      <div className="o-content-carousel">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          emulateTouch={true}
          interval={5000}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
        >
          <Slide type={"fullscreen"} />
          <Slide type={"rotate"} />
          <Slide type={"lucky"} />
        </Carousel>
      </div>

      <div className="o-content-loader">
        <div className="o-text-loading">Cargando</div>
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
