import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Welcome.css";
import Data from "../../assets/data-insight-logo.png";

/**
  * O componente Welcome é um componente funcional do React que exibe uma mensagem de boas-vindas, um botão para
  * inicie o jogo e uma imagem.
  * @returns O componente Welcome está retornando um elemento JSX.
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
