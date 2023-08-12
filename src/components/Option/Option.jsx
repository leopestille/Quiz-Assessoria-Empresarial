import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import "./Option.css";
import PropTypes from "prop-types";

/**
  * O componente Option é um componente React que renderiza uma opção e despacha uma ação quando
  * clicou.
  * @returns O componente Option está retornando um elemento div com o className "opção" e um parágrafo
  * elemento contendo o rótulo da opção.
  */
const Option = ({ option }) => {
	const [, dispatch] = useContext(QuizContext);

	/**
	 * A função selectOption despacha uma ação com uma opção selecionada como payload.
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
