import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { QuizContext } from "../../context/quiz";
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import End from "../../components/End/End";

const QuizPage = () => {
  const { authenticated } = useContext(AuthContext);
  const [quizState, dispatch] = useContext(QuizContext);

  if (!authenticated) {
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
