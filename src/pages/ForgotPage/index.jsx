import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";


const ForgotPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);

    const URL = import.meta.env.VITE_APP_API_URL;

    const validateEmail = (email) => {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
      if (!validateEmail(event.target.value)) {
        setError("Por favor, insira um email válido.");
      } else {
        setError(null);
      }
    }

    const handleForgot = async (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
          setError("Por favor, insira um email válido.");
          return;
      }

        try {
            const response = await axios.post(
                `${URL}forgot-password`,
              {
                email,
              }
            );
            setMessage(response.data);
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data);
            } else {
                 setMessage(
                   "Ocorreu um erro ao tentar redefinir a senha. Tente novamente."
                 );
            }
        }
    };

    return (
      <div id="forgot__form">
        <form className="form" onSubmit={handleForgot}>
          <h1 className="forgot">Esqueceu sua senha?</h1>
          <h2>
            Digite seu email abaixo para receber o link de redefinição de senha
          </h2>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {error && <p className="error-message">{error}</p>}
          </div>
          <div className="link-container">
            {/* Mostre a mensagem de retorno aqui, se ela existir */}
            {message && <p className="response-message">{message}</p>}
            <Link to="/login">
              <p>Voltar a área de Login</p>
            </Link>
            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
}

export default ForgotPage;