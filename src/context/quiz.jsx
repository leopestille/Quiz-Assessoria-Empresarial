import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import questions from "../data/questions";

const STAGES = ["Start", "Playing", "End"];

const InitialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  answerSelected: false,
  score: 0,
  selectedOption: null,
  openAnswers: [],
  selections: [],
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME": {
      let quizQuestions = [];

      state.questions.forEach((question) => {
        quizQuestions = [...quizQuestions, ...question.questions];
      });

      return {
        ...state,
        questions: quizQuestions,
        gameStage: STAGES[2],
      };
    }

    case "SELECT_OPTION": {
      const selectedOption = action.payload.option;

      return {
        ...state,
        answerSelected: true,
        selectedOption,
      };
    }

    case "CHANGE_QUESTION": {
      const nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      let newScore = state.score;

      // Add logic to update score if an answer has been selected
      if (state.answerSelected) {
        const optionValue = state.selectedOption.value;
        newScore += optionValue;
      }

      if (!state.questions[nextQuestion]) {
        endGame = true;
      }

      return {
        ...state,
        currentQuestion: nextQuestion,
        gameStage: endGame ? STAGES[2] : state.gameStage,
        answerSelected: false,
        score: newScore,
      };
    }

    case "SAVE_SELECTION": {
      const { questionLabel, selectedOption } = action.payload;

      // Adicionar a nova seleção ao array existente de seleções
      return {
        ...state,
        selections: [
          ...state.selections,
          {
            label: questionLabel,
            answer: selectedOption.label,
            value: selectedOption.value,
          },
        ],
      };
    }

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
