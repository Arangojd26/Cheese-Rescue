import React from "react";
import UserName from "../../components/Questions/UserName/UserName.component";
import "./Questions.page.scss";
import { PlayerContext } from "../../context/PlayerProvider/PlayerProvider";
import { QuestionContext } from "../../context/QuestionsProvider/QuestionProvider";
// import QuestionProvider from "../../context/QuestionsProvider/QuestionProvider";

const Questions = () => {
  const { playerControl } = React.useContext(PlayerContext);
  const { question, setQuestion, showQuestions } = React.useContext(
    QuestionContext
  );
  const [nameUser, setNameUser] = React.useState("");

  React.useEffect(() => {
    // if (localStorage.getItem("Nombre")) {
    //   localStorage.removeItem('Nombre');
    // }
    showQuestions(playerControl);
  }, [playerControl, showQuestions]);
  return (
    <>
      <div
        className={
          nameUser !== ""
            ? "o-title-name-user"
            : "d-none"
        }
      >
        Hola {nameUser}
      </div>
      {question === "ingresar nombre - v1" ? (
        <UserName setQuestion={setQuestion} setNameUser={setNameUser} />
      ) : question === "pregunta 1 - v1" ? null : question ===
        "pregunta 2 - v1" ? null : null}
    </>
  );
};

export default Questions;
