import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

/**
 * The `ResetPasswordPage` function is a React component that handles the reset password functionality,
 * including form validation and API calls.
 * @returns The code is returning a JSX element, specifically a `<div>` element with an id of
 * "reset__form". Inside the `<div>`, there is a `<form>` element with a className of "form" and an
 * onSubmit event handler set to `handleResetPassword`. Inside the `<form>`, there is an `<h1>` element
 * with a className of "reset" and the text "
 */
const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const { token } = useParams();
  const URL = import.meta.env.VITE_APP_API_URL;
  

  /**
   * The function `handleResetPassword` is an asynchronous function that handles the logic for
   * resetting a password, including checking if the password and confirm password match, making a POST
   * request to a specified URL with the password, and handling any errors that occur during the
   * process.
   * @returns The function `handleResetPassword` does not have a return statement.
   */
  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post(`${URL}reset/${token}`, {
        password: password,
      });
      setMessage(response.data);    
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data);
      } else {
        setMessage("Ocorreu um erro ao redefinir sua senha.");
      }
      console.error(error);
    }
  };

  return (
    <div id="reset__form">
      <form className="form" onSubmit={handleResetPassword}>
        <h1 className="reset">Redefinir Senha</h1>
        <div className="field">
          <label htmlFor="password">Nova Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">Confirme a Senha:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {message && <p className="response-message">{message}</p>}
        <button type="submit" className="btn">
          Redefinir Senha
        </button>
        <div className="link-container">
          <Link to="/login">
            <p>Voltar a área de Login</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

ResetPasswordPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      token: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ResetPasswordPage;
