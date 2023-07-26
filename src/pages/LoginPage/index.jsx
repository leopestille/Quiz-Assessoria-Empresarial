import { useState, useContext, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

const LoginPage = () => {
  const { login, errorMessage, clearMessageError } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return () => {
      clearMessageError();
    };
  }, []);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    await login(email, password);
  };

  return (
    <div id="login">
      <form className="form" onSubmit={handleLogin}>
        <h1 className="title">Faça seu Login</h1>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(f) => setPassword(f.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}{" "}
        {/* Exibe a mensagem de erro somente se houver uma mensagem */}
        <Link to="/register">
          <p>Cadastre-se</p>
        </Link>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
