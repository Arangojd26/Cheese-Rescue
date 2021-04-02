import React from "react";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";
import './ButtonPlayPause.component.scss';
import iconPlay from '../../../../assets/icons/play.svg';
import iconPause from '../../../../assets/icons/pause.svg'

const ButtonPlayPause = () => {

  const { playerControl } = React.useContext(PlayerContext);

  const handlePlayPause = () => playerControl.setPlaying(!playerControl.playing);

  return (
    <button className="o-btn-play-pause-control mx-2 mx-lg-3" onClick={() => handlePlayPause()}>
      <img
        className={playerControl.playing ? "o-img-pause-control" : "o-img-play-control"}
        src={playerControl.playing ? iconPause : iconPlay}
        alt="PlayPuase"
      />
    </button>
  );
};

export default ButtonPlayPause;
