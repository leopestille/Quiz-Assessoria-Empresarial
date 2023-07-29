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
  categoryScores: {},
  technologyQuestionsDisabled: false,
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    case "START_GAME": {
      let firstTechnologyQuestion = null;

      let newQuestions = [...state.questions];
      console.log(newQuestions);

      state.questions.forEach((question, index) => {
        if (
          question.category === "Tecnologia" &&
          firstTechnologyQuestion === null
        ) {
          firstTechnologyQuestion = index;
        }
      });

      return {
        ...state,
        gameStage: STAGES[2],
        firstTechnologyQuestion,
      };
    }

    case "SELECT_OPTION": {
      const selectedOption = action.payload.option;
      const isTechnologyFirstQuestion =
        state.currentQuestion === state.firstTechnologyQuestion;
      const isAnswerNo = selectedOption.label.toLowerCase() === "não";

      // Atualiza technologyQuestionsDisabled, se a condição for atendida
      let technologyQuestionsDisabled = state.technologyQuestionsDisabled;
      if (isTechnologyFirstQuestion && isAnswerNo) {
        technologyQuestionsDisabled = true;
      }

      return {
        ...state,
        answerSelected: true,
        selectedOption,
        technologyQuestionsDisabled,
      };
    }

    case "CHANGE_QUESTION": {
      let nextQuestion = state.currentQuestion + 1;
      let endGame = false;
      let newScore = state.score;
      let newQuestions = [...state.questions];      

      if (state.technologyQuestionsDisabled) {
        newQuestions = newQuestions.filter(
          (question) => question.category !== "Tecnologia"
        );

        while (
          newQuestions[nextQuestion] &&
          newQuestions[nextQuestion].category === "Tecnologia"
        ) {
          nextQuestion++;
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
        (selection) => selection.label === questionLabel
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
              : selection
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
