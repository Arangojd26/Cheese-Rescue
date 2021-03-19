import React from "react";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";

const ButtonPlayPause = () => {

  const { playerControl } = React.useContext(PlayerContext);

  const handlePlayPause = () => playerControl.setPlaying(!playerControl.playing);

  return (
    <button onClick={() => handlePlayPause()}>
      {playerControl.playing ? "Pause" : "Play"}
    </button>
  );
};

export default ButtonPlayPause;
