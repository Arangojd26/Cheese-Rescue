import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.component.scss";
import urlVideo from "../../../../assets/vid/Skeler.mp4";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";

const VideoPlayer = () => {
  const { playerControl } = React.useContext(PlayerContext);

  // React.useEffect(() => {
  //   async function viewPlayed() {
  //     console.log("onPlayed: ", playerControl.played);
  //   }
  //   viewPlayed();
  // }, [playerControl.played]);

  const handleProgress = (state) => {
    // console.log("onProgress: ", state);
    let { playedSeconds } = state;
    if (!playerControl.seeking) {
      playerControl.setPlayed(parseFloat(playedSeconds));
    }

    
  };

  return (
    <ReactPlayer
      ref={playerControl.player}
      className="react-player"
      playing={playerControl.playing}
      url={urlVideo}
      controls={false}
      onProgress={(e) => handleProgress(e)}
      width="100%"
      height="100%"
    />
  );
};

export default VideoPlayer;
