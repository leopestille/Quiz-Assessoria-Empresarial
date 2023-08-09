import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Option.css";
import PropTypes from "prop-types";

/**
 * The Option component is a React component that renders an option and dispatches an action when
 * clicked.
 * @returns The Option component is returning a div element with the className "option" and a paragraph
 * element containing the label of the option.
 */
const Option = ({ option }) => {
  const [, dispatch] = useContext(QuizContext);

  /**
   * The selectOption function dispatches an action with a selected option as the payload.
   */
  const selectOption = () => {
    dispatch({
      type: "SELECT_OPTION",
      payload: { option },
    });
  };

  return (
    <div onClick={selectOption} className="option">
      <p>{option.label}</p>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};

export default Option;
