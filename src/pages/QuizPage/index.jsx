import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth";
import { QuizContext } from "../../context/quiz";
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import End from "../../components/End/End";

/**
  * O componente QuizPage renderiza diferentes componentes com base no estágio do jogo e na autenticação do usuário
  * status.
  * @returns O componente QuizPage está retornando um elemento div contendo um cabeçalho com o texto "Quiz
  * DataInsight" e um dos três componentes com base no valor da variável quizState.gameStage. Se
  * o gameStage é "Start", o componente Welcome é renderizado. Se o gameStage estiver "Jogando", o
  * O componente de pergunta é renderizado. Se o gameStage for "End", o componente End será renderizado.
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
