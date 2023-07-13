import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";

const End = () => {
  const [{ selections, openAnswers }] = useContext(QuizContext);

  const generatePDF = () => {
    const doc = new jsPDF();

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

    doc.autoTable({
      head: [["Pergunta", "Resposta"]],
      body: data.map(item => [item.question, item.answer]),
    });

    doc.save("questionario-data-insight.pdf");
  };

  return <button onClick={generatePDF}>Download PDF</button>;
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
