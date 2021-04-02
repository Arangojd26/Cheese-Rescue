import React from "react";
import ReactPlayer from "react-player";
import videoInicio from '../../../assets/vid/inicio.mp4'

export const PlayerContext = React.createContext();

const PlayerProvider = (props) => {
  const [url, setUrl] = React.useState(videoInicio);
  const [playing, setPlaying] = React.useState(true);
  const [seeking, setSeeking] = React.useState(false);
  const [played, setPlayed] = React.useState(0);
  const [idTime, setIdTime] = React.useState('ingresar nombre');
  const [repetition, setRepetition] = React.useState(false);

  const player = React.useRef(ReactPlayer);

  return (
    <PlayerContext.Provider
      value={{
        playerControl: {
          url,
          setUrl,
          playing,
          setPlaying,
          seeking,
          setSeeking,
          played,
          setPlayed,
          idTime,
          repetition,
          setRepetition,
          setIdTime,
          player,
        },
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
