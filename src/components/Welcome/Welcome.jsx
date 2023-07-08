import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Welcome.css";
import Data from "../../assets/Data-Insight.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem Vindo ao nosso quiz</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Data} alt="Logo da Empresa DataInsight" />
    </div>
  );
};

export default Welcome;
