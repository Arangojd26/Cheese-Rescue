import React from "react";
import ButtonPlayPause from "../../components/Player/ButtonPlay/ButtonPlayPause.component";
import ButtonSeek from "../../components/Player/ButtonSeek/ButtonSeek.component";
import VideoPlayer from "../../components/Player/VideoPlayer/VideoPlayer.component";
import PlayerProvider from "../../context/PlayerProvider/PlayerProvider";

const Player = () => {
  return (
    <div>
      <PlayerProvider>
        <VideoPlayer />
        <ButtonSeek />
        <ButtonPlayPause />
      </PlayerProvider>
      
    </div>
  );
};

export default Player;
