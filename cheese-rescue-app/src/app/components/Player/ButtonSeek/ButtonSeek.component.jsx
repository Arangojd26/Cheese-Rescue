import React from "react";
import "./ButtonSeek.component.scss";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";

const ButtonSeek = (props) => {
  const { playerControl } = React.useContext(PlayerContext);

  const forwardBackwardVideo = (value, typeButton) => {
    let actualValue =
      typeButton === "forward"
        ? playerControl.played + value
        : playerControl.played - value;
    console.log("onActualValue: ", actualValue);
    playerControl.setSeeking(false);
    playerControl.player.current.seekTo(parseFloat(actualValue));
  };

  return (
    <div>
      <button type="button" onClick={() => forwardBackwardVideo(5)}>
        adelantar
      </button>
    </div>
  );
};

export default ButtonSeek;
