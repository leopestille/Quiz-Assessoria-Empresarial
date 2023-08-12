import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import questions from "../data/questions";

/* A linha `const STAGES = ["Start", "Playing", "End"];` está criando um array chamado `STAGES` com
três elementos: "Start", "Playing" e "End". Esta matriz é usada para definir os diferentes estágios de
o jogo no aplicativo de teste. */
const STAGES = ["Start", "Playing", "End"];

/* O `const InitialState` está criando um objeto que representa o estado inicial do quiz
aplicativo. Ele contém várias propriedades que armazenam diferentes informações sobre o
estado atual do jogo de perguntas. */
const InitialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  selectedOption: null,
  openAnswers: [],
  selections: [],
  categoryScores: {},
  technologyQuestionsDisabled: false,
  RHQuestionsDisabled: false,
};

/**
  * A função `quizReducer` é responsável por lidar com diferentes ações em um jogo de quiz, como
  * alterar a fase do jogo, iniciar o jogo, selecionar uma opção de pergunta, alterar o atual
  * pergunta, indo para a pergunta anterior, salvando a seleção do usuário e salvando uma pergunta aberta
  * responder.
  * @returns A função `quizReducer` retorna um novo objeto de estado com base no tipo de ação e carga útil
  * oferecido. O objeto de estado retornado inclui propriedades como `gameStage`, `answerSelected`,
  * `selectedOption`, `technologyQuestionsDisabled`, `RHQuestionsDisabled`, `currentQuestion`, `score`,
  * `questions`, `categoryScores`, `selections` e `openAnswers`. As propriedades específicas que são
  * atualizado e
  */
const quizReducer = (state, action) => {
  switch (action.type) {
		/* O bloco `case "CHANGE_STAGE"` faz parte da função `quizReducer` e é responsável por
     lidar com a ação de mudar o estágio do jogo no questionário. */
		case "CHANGE_STAGE":
			return {
				...state,
				gameStage: STAGES[1],
			};

		/* O bloco `case "START_GAME"` faz parte da função `quizReducer` e é responsável por
     lidar com a ação de iniciar o jogo no questionário. */
		case "START_GAME": {
			return {
				...state,
				gameStage: STAGES[2],
			};
		}

		/* O bloco `case "SELECT_OPTION"` faz parte da função quizReducer e é responsável por
     lidar com a ação de selecionar uma opção para uma pergunta no questionário. */
		case "SELECT_OPTION": {
			const selectedOption = action.payload.option;
			const isAnswerNo = selectedOption.label.toLowerCase() === "não";
			let technologyQuestionsDisabled = state.technologyQuestionsDisabled;
			if (isAnswerNo) {
				const currentQuestion = state.questions[state.currentQuestion];
				if (currentQuestion.category === "Tecnologia") {
					technologyQuestionsDisabled = true;
				}
			}

			let RHQuestionsDisabled = state.RHQuestionsDisabled;
			if (isAnswerNo) {
				const currentQuestion = state.questions[state.currentQuestion];
				if (currentQuestion.category === "RH") {
					RHQuestionsDisabled = true;
				}
			}

			return {
				...state,
				answerSelected: true,
				selectedOption,
				technologyQuestionsDisabled,
				RHQuestionsDisabled,
			};
		}

		/* O bloco `case "CHANGE_QUESTION"` é responsável por manipular a ação de alterar o
     pergunta atual no questionário. */
		case "CHANGE_QUESTION": {
			let nextQuestion = state.currentQuestion + 1;
			let endGame = false;
			let newScore = state.score;
			let newQuestions = [...state.questions];

			if (state.technologyQuestionsDisabled) {
				newQuestions = newQuestions.filter(
					(question) => question.category !== "Tecnologia",
				);

				while (
					newQuestions[nextQuestion] &&
					newQuestions[nextQuestion].category === "Tecnologia"
				) {
					nextQuestion += 1;
				}
			}

			if (state.RHQuestionsDisabled) {
				newQuestions = newQuestions.filter(
					(question) => question.category !== "RH",
				);

				while (
					newQuestions[nextQuestion] &&
					newQuestions[nextQuestion].category === "RH"
				) {
					nextQuestion += 1;
				}
			}

			if (state.answerSelected) {
				const optionValue = state.selectedOption.value;
				newScore += optionValue;
			}

			if (!newQuestions[nextQuestion]) {
				endGame = true;
			}

			return {
				...state,
				currentQuestion: nextQuestion,
				gameStage: endGame ? STAGES[2] : state.gameStage,
				answerSelected: false,
				score: newScore,
				questions: newQuestions,
			};
		}

		/* O bloco `case "PREVIOUS_QUESTION"` faz parte da função quizReducer e é responsável
     para lidar com a ação de ir para a pergunta anterior no questionário. */
		case "PREVIOUS_QUESTION": {
			const previousQuestion = state.currentQuestion - 1;

			return {
				...state,
				currentQuestion: previousQuestion,
			};
		}

		/* O bloco `case "SAVE_SELECTION"` faz parte da função `quizReducer` e é responsável por
     lidar com a ação de salvar a seleção do usuário para uma pergunta no questionário. */
		case "SAVE_SELECTION": {
			const { questionLabel, selectedOption, category } = action.payload;

			const existingSelectionIndex = state.selections.findIndex(
				(selection) => selection.label === questionLabel,
			);

			const newCategoryScore =
				(state.categoryScores[category] || 0) + selectedOption.value;

			let newState;

			if (state.technologyQuestionsDisabled && category === "Tecnologia") {
				return {
					...state,
					categoryScores: {
						...state.categoryScores,
						Tecnologia: 0,
					},
				};
			}

			if (existingSelectionIndex > -1) {
				newState = {
					...state,
					selections: state.selections.map((selection, index) =>
						index === existingSelectionIndex
							? {
									...selection,
									answer: selectedOption.label,
									value: selectedOption.value,
					}
							: selection,
					),
					categoryScores: {
						...state.categoryScores,
						[category]: newCategoryScore,
					},
				};
			} else {
				newState = {
					...state,
					selections: [
						...state.selections,
						{
							category,
							label: questionLabel,
							answer: selectedOption.label,
							value: selectedOption.value,
						},
					],
					categoryScores: {
						...state.categoryScores,
						[category]: newCategoryScore,
					},
				};
			}
			return newState;
		}

		/* O bloco `case "SAVE_OPEN_ANSWER"` faz parte da função `quizReducer` e é responsável
     para lidar com a ação de salvar uma resposta aberta para uma pergunta no questionário. */
		case "SAVE_OPEN_ANSWER":
			return {
				...state,
				openAnswers: [
					...state.openAnswers,
					{
						question: state.questions[state.currentQuestion].question,
						answer: action.payload.answer,
					},
				],
			};

		default:
			return state;
	}
};

export const QuizContext = createContext();

/**
  * O componente QuizProvider é um wrapper que fornece um QuizContext com um valor derivado do
  * quizReducer e InitialState para seus filhos.
  */
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, InitialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node,
};
