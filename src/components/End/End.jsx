import RadarChart from "../RadarChart/RadarChart";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { QuizContext } from "../../context/quiz";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import axios from "axios";

/**
  * O componente `End` é um componente React que gera um relatório em PDF com dados do usuário, incluindo quiz
  * seleções, e permite ao usuário baixá-lo, bem como sair do aplicativo.
  * @returns O componente `End` está retornando elementos JSX, especificamente um elemento `div` com um id de
  * "end-container". Dentro do `div`, há um elemento de parágrafo e um elemento `div` com uma classe de
  * "button-container". Dentro do "button-container", existem dois botões, um com o texto
  * "Baixar PDF" e outro com o texto "Sair" (que significa
  */
const End = () => {
	const [{ selections, openAnswers, categoryScores }] = useContext(QuizContext);
	const authContext = useContext(AuthContext);
	const logout = authContext.logout;
	const radarChartRef = useRef(null);
	const labels = Object.keys(categoryScores);
	const data = Object.values(categoryScores);
	const username = JSON.parse(localStorage.getItem("user")).name;
	/**
	 * A função `generatePDF` gera um relatório em PDF com os dados do usuário e salva, e também envia um
	 * Solicitação PATCH para atualizar as seleções do usuário.
	 */
	const generatePDF = () => {
		const doc = new jsPDF("p", "pt", "a4");
		const user = JSON.parse(localStorage.getItem("user"));
		const token = localStorage.getItem("token");
		//const pageWidth = doc.internal.pageSize.getWidth();
		let userId = user.id;

		let data = [];
		if (selections) {
			selections.forEach((selection) => {
				data.push({
					question: `${selection.label}`,
					answer: `${selection.answer}`,
				});
			});
		}
		if (openAnswers) {
			openAnswers.forEach((openAnswer) => {
				data.push({
					question: `${openAnswer.question}`,
					answer: `${openAnswer.answer}`,
				});
			});
		}
		//const title = `Nome do Usuário: ${user.name}`;
		//const titleWidth =
		// doc.getStringUnitWidth(title) * doc.internal.getFontSize();
		// const titleX = (pageWidth - titleWidth) / 2;
		// doc.text(title, titleX, 20);

		if (radarChartRef.current) {
			const imageUrl = radarChartRef.current.toDataURL("image/png");
			doc.addImage(imageUrl, "PNG", 11, 60, 540, 500);
		}
		doc.save(`Relatorio de Negocio - ${user.name}.pdf`);
		const url = `${import.meta.env.VITE_APP_API_URL}users/${userId}`;
		axios.patch(
			url,
			{ selections },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	};
	return (
		<div id="end-container">
			<p>
				Clique no botão abaixo para fazer o download dos resultados do seu Quiz.
			</p>
			<div className="button-container">
				<button onClick={generatePDF}>Download PDF</button>
				<button onClick={logout}>Sair</button>
				<RadarChart
					ref={radarChartRef}
					labels={labels}
					data={data}
					label={username}
				/>
			</div>
		</div>
	);
};
End.propTypes = {
  selections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
  openAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ),
};
export default End;
