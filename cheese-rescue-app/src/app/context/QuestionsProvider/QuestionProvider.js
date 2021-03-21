import React from "react";

export const QuestionContext = React.createContext();

const QuestionProvider = (props) => {

  const [question, setQuestion] = React.useState(0);

  const showQuestions = (playerControl) => {
    // const { playerControl } = React.useContext(PlayerContext);
    const seconds = parseInt(playerControl.played.toFixed(0));
    console.log(seconds);

    if (seconds === 5 && playerControl.idTime === 0) {
      playerControl.setIdTime(1);
      playerControl.setPlaying(false);
      setQuestion("ingresar nombre - v1");
    } else if (seconds === 9 && playerControl.idTime === 1) {
      playerControl.setIdTime(2);
      playerControl.setPlaying(false);
      setQuestion("pregunta 1 - v1");
    } else if (seconds === 15 && playerControl.idTime === 2) {
      playerControl.setIdTime(3);
      playerControl.setPlaying(false);
      setQuestion("pregunta 2 - v1");
    }
    console.log("id: ", playerControl.idTime);
  };

  return (
    <QuestionContext.Provider value={{ question, showQuestions }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
