import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { QuizContext } from "../../context/quiz";
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import End from "../../components/End/End";

/**
 * The QuizPage component renders different components based on the game stage and user authentication
 * status.
 * @returns The QuizPage component is returning a div element containing a heading with the text "Quiz
 * DataInsight" and one of three components based on the value of the quizState.gameStage variable. If
 * the gameStage is "Start", the Welcome component is rendered. If the gameStage is "Playing", the
 * Question component is rendered. If the gameStage is "End", the End component is rendered.
 */
const QuizPage = () => {
  const { authenticated } = useContext(AuthContext);
  const [quizState, dispatch] = useContext(QuizContext);

  if (authenticated === false) {
    return <Navigate to="/login" replace />;
}

  return (
    <div>
      <h1>Quiz DataInsight</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <End />}
    </div>
  );
};

export default QuizPage;
