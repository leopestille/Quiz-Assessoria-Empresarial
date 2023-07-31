import RadarChart from "../RadarChart/RadarChart";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { QuizContext } from "../../context/quiz";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import axios from "axios";

const End = () => {
  const [{ selections, categoryScores }] = useContext(QuizContext);
  const authContext = useContext(AuthContext);
  const logout = authContext.logout;
  const radarChartRef = useRef(null);
  const labels = Object.keys(categoryScores);
  const data = Object.values(categoryScores);
  const username = JSON.parse(localStorage.getItem("user")).name;   

  const generatePDF = () => {
    const doc = new jsPDF("p", "pt", "a4");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    const pageWidth = doc.internal.pageSize.getWidth();
    
    if (selections) {
      selections.forEach((selection) => {
        data.push({
          question: `${selection.label}`,
          answer: `${selection.answer}`,
        });
      });
    }

    const imageWidth = 300; // Largura da imagem
    const imageHeight = 120; // Altura da imagem
    const title = `Nome do Usuário: ${user.name}`;
    const titleWidth =
      doc.getStringUnitWidth(title) * doc.internal.getFontSize();

    // Posicionamento central da imagem
    const imageX = (pageWidth - imageWidth) / 0.5;
    const imageY = 20;

    // Posicionamento central do título
    const titleX = (pageWidth - titleWidth) / 2;
    const titleY = imageY + imageHeight + 20; // Espaço entre a imagem e o título

    doc.text(title, titleX, titleY);

    if (radarChartRef.current) {
      const imageUrl = radarChartRef.current.toDataURL("image/png");
      const originalWidth = imageWidth;
      const originalHeight = imageHeight;
      const newHeight = originalHeight * 2;

      const newWidth = (newHeight * originalWidth) / originalHeight;

      doc.addImage(imageUrl, "PNG", imageX, imageY, newWidth, newHeight);
    }

    doc.save("questionario-data-insight.pdf");

    const url = `${import.meta.env.VITE_APP_API_URL}users/${user.id}`;
    axios.patch(
      url,
      { selections },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
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
