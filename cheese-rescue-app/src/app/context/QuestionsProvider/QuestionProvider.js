import React from "react";

export const QuestionContext = React.createContext();

const QuestionProvider = (props) => {
  const [question, setQuestion] = React.useState("");

  const showQuestions = (playerControl) => {
    let seconds = parseInt(playerControl.played.toFixed(0));
    // console.log(seconds);

    if (seconds === 19 && playerControl.idTime === "ingresar nombre") {
      playerControl.setIdTime("pregunta 1 - v1");
      playerControl.setPlaying(false);
      setQuestion("ingresar nombre - v1");

    } else if (seconds === 86 && playerControl.idTime === "pregunta 1 - v1") {
      setTimeout(() => {
        playerControl.setPlaying(false);
        setQuestion("pregunta 1 - v1");
      }, 300);

    } else if (
      seconds === 23 &&
      playerControl.idTime === "pregunta 1 - v1 - incorrecto"
    ) {
      playerControl.setPlayed(0);
      // console.log("Entras al if");
      playerControl.setPlaying(false);
      setQuestion("pregunta 1 - v1");
      playerControl.setRepetition(true);

    } else if (seconds === 35 && playerControl.idTime === "pregunta 1 - v2") {
      setTimeout(() => {
        playerControl.setPlaying(false);
        setQuestion("pregunta 1 - v2");
      }, 300);

    } else if (
      seconds === 29 &&
      playerControl.idTime === "pregunta 1 - v2 - incorrecto"
    ) {
      playerControl.setPlayed(0);
      // console.log("Entras al if");
      playerControl.setPlaying(false);
      setQuestion("pregunta 1 - v2");
      playerControl.setRepetition(true);

    } else if (seconds === 41 && playerControl.idTime === "pregunta 1 - v3") {
      setTimeout(() => {
        playerControl.setPlaying(false);
        setQuestion("pregunta 1 - v3");
      }, 300);
      
    } else if (
      seconds === 18 &&
      playerControl.idTime === "pregunta 1 - v3 - incorrecto"
    ) {
      playerControl.setPlayed(0);
      // console.log("Entras al if");
      playerControl.setPlaying(false);
      setQuestion("pregunta 1 - v3");
      playerControl.setRepetition(true);
    }

    // console.log("id: ", playerControl.idTime);
  };

  return (
    <QuestionContext.Provider value={{ question, setQuestion, showQuestions }}>
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
