import React from "react";
import "./ButtonSeek.component.scss";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";
import iconRewind from "../../../../assets/icons/rewind.svg";
import iconSkip from "../../../../assets/icons/skip.svg";

const ButtonSeek = ({ type }) => {
  const { playerControl } = React.useContext(PlayerContext);

  const forwardBackwardVideo = (value) => {
    let actualValue =
      type === "backward"
        ? playerControl.played - value
        : playerControl.played + value;

    playerControl.setSeeking(false);
    playerControl.player.current.seekTo(parseFloat(actualValue));
  };

  return (
    <button
      className="o-btn-time-control"
      type="button"
      onClick={() => forwardBackwardVideo(5)}
    >
      <img
        className="o-img-time-control"
        src={type === "backward" ? iconRewind : iconSkip}
        alt="rewind"
      />
    </button>
  );
};

export default ButtonSeek;
