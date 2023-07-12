import { jsPDF } from "jspdf";
import PropTypes from "prop-types";

const PDFdownloadButton = ({ selections, openAnswers }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    let content = "";

    if (selections) {
      selections.forEach((selection, index) => {
        content += `Pergunta ${index + 1}: ${
          selection.label
        }\nResposta Selecionada: ${selection.answer}\n\n`;
      });
    }

    if (openAnswers) {
      openAnswers.forEach((openAnswer, index) => {
        content += `Pergunta ${index + 1}: ${
          openAnswer.question
        }\nResposta Selecionada: ${openAnswer.answer}\n\n`;
      });
    }

    doc.text(content, 10, 10);
    doc.save("questionario-data-insight.pdf");
  };

  return <button onClick={generatePDF}>Download PDF</button>;
};

PDFdownloadButton.propTypes = {
  selections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
  openAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PDFdownloadButton;
