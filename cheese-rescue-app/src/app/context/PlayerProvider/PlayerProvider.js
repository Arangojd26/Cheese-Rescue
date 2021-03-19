import React from "react";
import ReactPlayer from "react-player";

export const PlayerContext = React.createContext();

const PlayerProvider = (props) => {
  const [playing, setPlaying] = React.useState(true);
  const [seeking, setSeeking] = React.useState(false);
  const [played, setPlayed] = React.useState(0);

  const player = React.useRef(ReactPlayer);

  return (
    <PlayerContext.Provider
      value={{
        playerControl: {
          playing,
          setPlaying,
          seeking,
          setSeeking,
          played,
          setPlayed,
          player,
        },
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
