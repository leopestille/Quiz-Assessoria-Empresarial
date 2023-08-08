import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import questions from "../data/questions";

/* The line `const STAGES = ["Start", "Playing", "End"];` is creating an array called `STAGES` with
three elements: "Start", "Playing", and "End". This array is used to define the different stages of
the game in the quiz application. */
const STAGES = ["Start", "Playing", "End"];

/* The `const InitialState` is creating an object that represents the initial state of the quiz
application. It contains various properties that store different pieces of information about the
current state of the quiz game. */
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
 * The `quizReducer` function is responsible for handling different actions in a quiz game, such as
 * changing the game stage, starting the game, selecting an option for a question, changing the current
 * question, going to the previous question, saving the user's selection, and saving an open-ended
 * answer.
 * @returns The `quizReducer` function returns a new state object based on the action type and payload
 * provided. The returned state object includes properties such as `gameStage`, `answerSelected`,
 * `selectedOption`, `technologyQuestionsDisabled`, `RHQuestionsDisabled`, `currentQuestion`, `score`,
 * `questions`, `categoryScores`, `selections`, and `openAnswers`. The specific properties that are
 * updated and
 */
const quizReducer = (state, action) => {
  switch (action.type) {
    /* The `case "CHANGE_STAGE"` block is a part of the `quizReducer` function and is responsible for
    handling the action of changing the game stage in the quiz. */
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };

    /* The `case "START_GAME"` block is a part of the `quizReducer` function and is responsible for
    handling the action of starting the game in the quiz. */
    case "START_GAME": {
      
      return {
        ...state,
        gameStage: STAGES[2],        
      };
    }

    /* The `case "SELECT_OPTION"` block is a part of the quizReducer function and is responsible for
    handling the action of selecting an option for a question in the quiz. */
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

    /* The `case "CHANGE_QUESTION"` block is responsible for handling the action of changing the
    current question in the quiz. */
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
          nextQuestion += 1;
        }        
      }

      if (state.RHQuestionsDisabled) {
        newQuestions = newQuestions.filter((question) => question.category !== "RH");

        while (
          newQuestions[nextQuestion] && newQuestions[nextQuestion].category === "RH") {
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

    /* The `case "PREVIOUS_QUESTION"` block is a part of the quizReducer function and is responsible
    for handling the action of going to the previous question in the quiz. */
    case "PREVIOUS_QUESTION": {
      const previousQuestion = state.currentQuestion - 1;

      return {
        ...state,
        currentQuestion: previousQuestion,
      };
    }

    /* The `case "SAVE_SELECTION"` block is a part of the `quizReducer` function and is responsible for
    handling the action of saving the user's selection for a question in the quiz. */
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

    /* The `case "SAVE_OPEN_ANSWER"` block is a part of the `quizReducer` function and is responsible
    for handling the action of saving an open-ended answer for a question in the quiz. */
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
 * The QuizProvider component is a wrapper that provides a QuizContext with a value derived from the
 * quizReducer and InitialState to its children.
 */
export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, InitialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

QuizProvider.propTypes = {
  children: PropTypes.node,
};
