import { useContext, useState } from "react";
import { QuizContext } from "../../context/quiz";
import Option from "../Option/Option";
import "./Question.css";

/* O componente `Question` é um componente funcional do React que renderiza uma pergunta e suas opções em
um teste. Ele usa os ganchos `useContext` e `useState` do React para acessar e atualizar o questionário
estado. */
const Question = () => {
	const [quizState, dispatch] = useContext(QuizContext);
	const currentQuestion = quizState.questions?.[quizState.currentQuestion];
	const [answer, setAnswer] = useState("");

	/**
	 * A função trata do envio de uma resposta aberta em um questionário, salvando a resposta, limpando o
	 * campo de entrada e alterando a pergunta atual se for a última pergunta.
	 */
	const handleOpenAnswerSubmit = () => {
		dispatch({ type: "SAVE_OPEN_ANSWER", payload: { answer } });
		setAnswer("");

		if (quizState.currentQuestion === quizState.questions.length - 1) {
			dispatch({ type: "CHANGE_QUESTION" });
		}
	};

	/**
	 * A função handleContinue despacha ações para salvar a opção selecionada, o label da pergunta e a
	 * categoria e, em seguida, altera a pergunta atual.
	 */
	const handleContinue = () => {
		dispatch({
			type: "SAVE_SELECTION",
			payload: {
				selectedOption: quizState.selectedOption,
				questionLabel: currentQuestion.question,
				category: currentQuestion.category,
			},
		});
		dispatch({ type: "CHANGE_QUESTION" });
	};

	/**
	 * A função handlePrevious despacha uma ação do tipo "PREVIOUS_QUESTION".
	 */
	const handlePrevious = () => {
		dispatch({ type: "PREVIOUS_QUESTION" });
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
						<div className="answer">
							<label htmlFor="answer">Resposta:</label>
							<input
								name="answer"
								type="text"
								value={answer}
								onChange={(e) => setAnswer(e.target.value)}
							/>
						</div>
						<button onClick={handleOpenAnswerSubmit}>
							Submeter Questionário
						</button>
					</>
				) : (
					currentQuestion.options.map((option) => (
						<Option option={option} key={option.label} />
					))
				)}
			</div>
			{quizState.currentQuestion > 0 && (
				<button onClick={handlePrevious}>Voltar</button>
			)}
			{quizState.answerSelected && (
				<button onClick={handleContinue}>Continuar</button>
			)}
		</div>
	);
};

export default Question;
