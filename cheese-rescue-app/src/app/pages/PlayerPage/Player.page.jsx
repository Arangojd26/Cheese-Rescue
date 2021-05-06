import React from "react";
import "./Player.page.scss";
import ButtonPlayPause from "../../components/Player/ButtonPlay/ButtonPlayPause.component";
import ButtonSeek from "../../components/Player/ButtonSeek/ButtonSeek.component";
import Loading from "../../components/Player/Loading/Loading.component";
import VideoPlayer from "../../components/Player/VideoPlayer/VideoPlayer.component";
import PlayerProvider from "../../context/PlayerProvider/PlayerProvider";
import QuestionProvider from "../../context/QuestionsProvider/QuestionProvider";
import Questions from "../QuestionsPage/Questions.page";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import ContainerPlayer from "../../components/Player/ContainerPlayer/ContainerPlayer.component";
import ButtonFullScreen from "../../components/Home/ButtonFullScreen/ButtonFullScreen.component";

const Player = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const handle = useFullScreenHandle();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 15000);
  }, []);

  return !isLoading ? (
    <>
      <div className="o-layer-background" />
      <FullScreen handle={handle}>
        <PlayerProvider>
          <VideoPlayer />
          <ContainerPlayer>
            <ButtonSeek type={"backward"} />
            <ButtonPlayPause />
            <ButtonSeek type={"forward"} />
          </ContainerPlayer>
          <QuestionProvider>
            <Questions />
          </QuestionProvider>
        </PlayerProvider>
      </FullScreen>
      <ButtonFullScreen handle={handle} />
    </>
  ) : (
    <Loading />
  );
};

export default Player;
