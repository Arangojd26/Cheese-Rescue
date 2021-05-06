import React from 'react'
import iconFullScreen from "../../../../assets/img/fullscreen.png";
import './ButtonFullScreen.component.scss';

const ButtonFullScreen = ({ handle }) => {
    return (
        <div className="o-container-btn-fullscreen">
        <input
          className="o-btn-fullscreen"
          type="image"
          alt="fullscreen"
          src={iconFullScreen}
          onClick={handle.enter}
        />
      </div>
    )
}

export default ButtonFullScreen
