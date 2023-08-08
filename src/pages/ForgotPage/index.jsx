import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

/**
 * The `ForgotPage` component is a form that allows users to enter their email to receive a password
 * reset link, and displays a response message if there is one.
 * @returns The `ForgotPage` component is being returned.
 */
const ForgotPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const URL = import.meta.env.VITE_APP_API_URL;
    
    /**
     * The `handleForgot` function is an asynchronous function that sends a POST request to a specified
     * URL with an email parameter, and sets the response data or error message to the `message` state
     * variable.
     */
    const handleForgot = async (event) => {
        event.preventDefault();
        
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
              onChange={(b) => setEmail(b.target.value)}
              required
            />
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