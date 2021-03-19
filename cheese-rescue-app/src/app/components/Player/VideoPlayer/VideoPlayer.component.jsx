import React from 'react'
import ReactPlayer from "react-player";
import './VideoPlayer.component.scss'
import urlVideo from "../../../../assets/vid/love.mp4";
import {PlayerContext} from '../../../context/PlayerProvider/PlayerProvider'

const VideoPlayer = () => {

    const { playerControl } = React.useContext(PlayerContext);

    React.useEffect(() => {
      async function viewPlayed() {
        console.log("onPlayed: ", playerControl.played);
      }
      viewPlayed();
    }, [playerControl.played]);

    const handleProgress = (state) => {
      // console.log("onProgress: ", state);
      let { playedSeconds } = state;
      if (!playerControl.seeking) {
        playerControl.setPlayed(playedSeconds);
      }
    };

    return (
      <div>
        <ReactPlayer
          ref={playerControl.player}
          className="react-player"
          playing={playerControl.playing}
          url={urlVideo}
          controls={false}
          onProgress={(e) => handleProgress(e)}
        />
      </div>
    );
}

export default VideoPlayer
