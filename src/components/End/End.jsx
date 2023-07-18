import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";
import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import axios from "axios";

const End = () => {
  const [{ selections, openAnswers, score }] = useContext(QuizContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const authContext = useContext(AuthContext);
  const logout = authContext.logout;   

  const generatePDF = () => {
    const doc = new jsPDF();

    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
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

    const userProblem = score <= 67
    ? `O problema da ${user.name} é DIRETIVO`
    : `O problema da ${user.name} é Gestão de Pessoas`;

    doc.text(`Nome do Usuário: ${user.name}`, 10, 10);
    doc.text(userProblem, 10, 20);

    doc.autoTable({
      head: [["Pergunta", "Resposta"]],
      body: data.map(item => [item.question, item.answer]),
      startY: 30
    });

    doc.save("questionario-data-insight.pdf");

    const pdfBase64 = doc.output("datauristring");
    const url = `${process.env.VITE_APP_API_URL}/users/${userId}`;
    axios.patch(url, { pdfData: pdfBase64, selections }, {
  headers: {
    'Authorization': `Bearer ${token}`
  }
    });

  };

  return (
    <div id="end-container">
      <p>
        {score <= 67 
          ? `O problema da ${user.name} é DIRETIVO` 
          : `O problema da ${user.name} é Gestão de Pessoas`
        }
      </p>
      <p>
        Clique no botão abaixo para fazer o download dos resultados do seu Quiz.
      </p>
      <div className="button-container">
      <button onClick={generatePDF}>Download PDF</button>
      <button onClick={logout} >Sair</button>
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
