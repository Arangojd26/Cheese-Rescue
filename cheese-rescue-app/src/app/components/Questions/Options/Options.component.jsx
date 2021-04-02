import React from "react";
import "./Options.component.scss";
import { PlayerContext } from "../../../context/PlayerProvider/PlayerProvider";
// import { videos } from '../../../constants/Options'
// import videoCorrecto1 from '../../../../assets/vid/Skeler.mp4'

const Options = (props) => {
  const { playerControl } = React.useContext(PlayerContext);

  const validateAnswer = (valueButton) => {
    if (parseInt(valueButton) === parseInt(props.correct)) {
      playerControl.setUrl(props.videoCorrecto);
      playerControl.setRepetition(false);
      playerControl.setPlaying(true);
      props.setQuestion("");
      playerControl.setIdTime(props.idNext);
    } else {
      props.setQuestion("");
      playerControl.setUrl(props.videoIncorrecto);
      playerControl.setIdTime(props.idIncorrect);
      playerControl.setRepetition(false);
      playerControl.setPlayed(0);
      playerControl.setPlaying(true);

      setTimeout(() => {
        props.setQuestion("");
        playerControl.setIdTime(props.idIncorrect);
        playerControl.setRepetition(false);
        playerControl.setPlayed(0);
        playerControl.setPlaying(true);
      }, 1500);
    }
  };

  return (
    <div className="o-container-options">
      <div className="o-content-options">
        <h3 className="o-title-options">Opciones</h3>
        <div className="o-container-buttons-options">
          {props.opts.values.map((value) => (
            <button
              key={value}
              className="o-btn-option"
              type="button"
              onClick={() => validateAnswer(value)}
            >
              {value}
            </button>
          ))}
          {/* <button className="o-btn-option" type="button">41</button>
            <button className="o-btn-option" type="button">49</button>
            <button className="o-btn-option" type="button">42</button> */}
        </div>
      </div>
    </div>
  );
};

export default Options;
