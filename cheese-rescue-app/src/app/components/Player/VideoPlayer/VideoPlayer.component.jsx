import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.component.scss";
import { withRouter } from "react-router-dom";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";
import lastVideo from "../../../../assets/vid/CorrectaFinal_1.mp4";

const VideoPlayer = (props) => {
  const { playerControl } = React.useContext(PlayerContext);

  const handleProgress = (state) => {
    let { playedSeconds } = state;
    if (!playerControl.seeking) {
      playerControl.setPlayed(parseFloat(playedSeconds));
    }
  };

  const lastVideoFinished = () => props.history.push("/");

  return (
    <ReactPlayer
      ref={playerControl.player}
      className="react-player"
      playing={playerControl.playing}
      url={playerControl.url}
      controls={false}
      onProgress={(e) => handleProgress(e)}
      onEnded={
        playerControl.url === lastVideo ? () => lastVideoFinished() : null
      }
      width="100%"
      height="100%"
      // muted={true}
    />
  );
};

export default withRouter(VideoPlayer);
