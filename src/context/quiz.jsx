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


const quizReducer = (state, action) => {
  switch (action.type) {

		case "CHANGE_STAGE":
			return {
				...state,
				gameStage: STAGES[1],
			};


		case "START_GAME": {
			return {
				...state,
				gameStage: STAGES[2],
			};
		}


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


		case "PREVIOUS_QUESTION": {
			const previousQuestion = state.currentQuestion - 1;

			return {
				...state,
				currentQuestion: previousQuestion,
			};
		}


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


export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, InitialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node,
};
