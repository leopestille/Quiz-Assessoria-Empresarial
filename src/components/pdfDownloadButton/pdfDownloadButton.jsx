import { jsPDF } from "jspdf";

const PDFdownloadButton = ({ selections, openAnswers }) => {
  const generatePDF = () => {
    const doc = new jsPDF();
    let content = "";

    selections.forEach((selection, index) => {
      content += `Pergunta ${index + 1}: ${
        selection.label
      }\nResposta Selecionada: ${selection.answer}\n\n`;
    });

    openAnswers.forEach((openAnswer, index) => {
      content += `Pergunta ${index + 1}: ${
        openAnswer.question
      }\nResposta Selecionada: ${openAnswer.answer}\n\n`;
    });

    doc.text(content, 10, 10);
    doc.save("questionario-data-insight.pdf");
  };

  return <button onClick={generatePDF}>Download PDF</button>;
};

export default PDFdownloadButton;
