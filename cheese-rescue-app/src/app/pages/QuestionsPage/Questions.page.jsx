import React from "react";
import UserName from "../../components/Questions/UserName/UserName.component";
import { PlayerContext } from "../../context/PlayerProvider/PlayerProvider";
import { QuestionContext } from "../../context/QuestionsProvider/QuestionProvider";
import Options from "../../components/Questions/Options/Options.component";
import { validation } from "../../constants/Options";
import { videos } from "../../constants/Options";
import Preview from "../../components/Questions/Preview/Preview.component";
import "./Questions.page.scss";

const Questions = () => {
  const { playerControl } = React.useContext(PlayerContext);
  const { question, setQuestion, showQuestions } = React.useContext(
    QuestionContext
  );
  const [nameUser, setNameUser] = React.useState("");

  React.useEffect(() => {
    showQuestions(playerControl);
  }, [playerControl, showQuestions]);

  const renderQuestions = () => {
    switch (question) {
      case "ingresar nombre - v1":
        return <UserName setQuestion={setQuestion} setNameUser={setNameUser} />;
      case "pregunta 1 - v1":
        return (
          <>
            <Options
              setQuestion={setQuestion}
              opts={validation.question1}
              idIncorrect={validation.question1.idIncorrecta}
              idNext={validation.question1.idNext}
              correct={validation.question1.correct}
              videoCorrecto={videos.videoCorrecto1}
              videoIncorrecto={videos.videoIncorrecto1}
            />
            <Preview view={"v1"} />
          </>
        );
      case "pregunta 1 - v2":
        return (
          <>
            <Options
              setQuestion={setQuestion}
              opts={validation.question2}
              idIncorrect={validation.question2.idIncorrecta}
              idNext={validation.question2.idNext}
              correct={validation.question2.correct}
              videoCorrecto={videos.videoCorrecto2}
              videoIncorrecto={videos.videoIncorrecto2}
            />
            <Preview view={"v2"} />
          </>
        );
      case "pregunta 1 - v3":
        return (
          <>
            <Options
              setQuestion={setQuestion}
              opts={validation.question3}
              idIncorrect={validation.question3.idIncorrecta}
              idNext={validation.question3.idNext}
              correct={validation.question3.correct}
              videoCorrecto={videos.videoCorrecto3}
              videoIncorrecto={videos.videoIncorrecto3}
            />
            <Preview view={"v3"} />
          </>
        );

      default:
        break;
    }
  };
  return (
    <>
      <div className={nameUser !== "" ? "o-title-name-user" : "d-none"}>
        Hola {nameUser}
      </div>
      {renderQuestions()}
    </>
  );
};

export default Questions;
