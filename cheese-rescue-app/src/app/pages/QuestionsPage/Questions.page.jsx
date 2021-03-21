import React from "react";
import UserName from "../../components/Questions/UserName/UserName.component";
import "./Questions.page.scss";
import { PlayerContext } from "../../context/PlayerProvider/PlayerProvider";
import { QuestionContext } from "../../context/QuestionsProvider/QuestionProvider";
// import QuestionProvider from "../../context/QuestionsProvider/QuestionProvider";

const Questions = () => {
  const { playerControl } = React.useContext(PlayerContext);
  const { question, showQuestions } = React.useContext(QuestionContext);

  React.useEffect(() => {
    showQuestions(playerControl);
  }, [playerControl, showQuestions]);
  return (
    <>
      {question === "ingresar nombre - v1" ? (
        <UserName />
      ) : question === "pregunta 1 - v1" ? (
        <UserName />
      ) : question === "pregunta 2 - v1" ? (
        <UserName />
      ) : null}
    </>
  );
};

export default Questions;
