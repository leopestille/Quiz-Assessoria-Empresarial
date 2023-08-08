import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import { Link } from "react-router-dom";

/**
 * The RegisterPage component is a form that handles user registration and displays success and error
 * messages.
 * @returns The RegisterPage component is returning a form for user registration.
 */
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { errorMessage, register, clearMessageError } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    return () => {
      clearMessageError();
    };
  }, []);
    
  /**
   * The function "handleRegister" is an asynchronous function that handles the registration process
   * and displays a success message if the registration is successful.
   */
  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await register(name, email, password);    
    
    if (response && response.status === 201) {
      setSuccessMessage("Cadastro realizado com sucesso!");
    }
  };

  /**
   * The function checks if the form is valid by ensuring that all required fields are filled and that
   * the password and confirm password fields match.
   * @returns a boolean value indicating whether the form is valid or not.
   */
  const isFormValid = () => {
    return email && password && confirmPassword && password === confirmPassword;
  };

  return (
    <div id="register__form">
      <form className="form" onSubmit={handleRegister}>
        <h1 className="register">Faça seu Cadastro</h1>
        <div className="field">
          <label htmlFor="name__corp">Nome da Sua empresa:</label>
          <input
            type="text"
            name="name__corp"
            id="name__corp"
            value={name}
            onChange={(a) => setName(a.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(b) => setEmail(b.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(c) => setPassword(c.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="confirmPassword">Confirme sua senha:</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(f) => setConfirmPassword(f.target.value)}
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}{" "}
        {/* Exibe a mensagem de erro somente se houver uma mensagem */}
        {successMessage && <p className="success">{successMessage}</p>}
        {/* Exibe a mensagem de erro somente se houver uma mensagem */}
        <div className="link-container">
          <Link to="/login">
            <p>Faça Login</p>
          </Link>
        </div>
        <div className="actions">
          <button disabled={!isFormValid()} type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
