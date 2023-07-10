import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Option.css";
import PropTypes from "prop-types";

const Option = ({ option }) => {
  const [, dispatch] = useContext(QuizContext);

  const selectOption = () => {
    dispatch({
      type: "SELECT_OPTION",
      payload: { option },
    });
  };

  return (
    <div onClick={selectOption} className="option">
      <p>{option}</p>
    </div>
  );
};

Option.propTypes = {
  option: PropTypes.string.isRequired,
};

export default Option;
