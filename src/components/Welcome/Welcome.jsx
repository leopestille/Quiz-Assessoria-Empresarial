import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Welcome.css";
import Data from "../../assets/data-insight-logo.png";

/**
 * The Welcome component is a React functional component that displays a welcome message, a button to
 * start the game, and an image.
 * @returns The Welcome component is returning a JSX element.
 */
const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);  

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
