import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { errorMessage, register, clearMessageError } = useContext(AuthContext);

  useEffect(() => {
    return () => {
      clearMessageError();
    };
  }, []);
    
  const handleRegister = async (event) => {
    event.preventDefault();
    register(name, email, password);
  };

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
