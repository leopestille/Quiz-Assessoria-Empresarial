import { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Option/Option";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions?.[quizState.currentQuestion];
  const [answer, setAnswer] = useState("");

  const handleOpenAnswerSubmit = () => {
    dispatch({ type: "SAVE_OPEN_ANSWER", payload: { answer } });
    setAnswer("");
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.type === "open" ? (
          <>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button onClick={handleOpenAnswerSubmit}>Submit</button>
          </>
        ) : (
          currentQuestion.options.map((option) => (
            <Option option={option} key={option} />
          ))
        )}
      </div>
      {!quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
