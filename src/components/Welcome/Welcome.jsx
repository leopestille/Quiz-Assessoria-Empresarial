import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Welcome.css";
import Data from "../../assets/logo-data-insight.jpg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem Vindo ao seu relatório de negócio</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button
        onClick={() => {
          dispatch({ type: "START_GAME" });
          dispatch({ type: "CHANGE_STAGE" });                    
        }}
      >
        Iniciar
      </button>
      <img src={Data} alt="Logo da Empresa DataInsight" />
    </div>
  );
};

export default Welcome;
