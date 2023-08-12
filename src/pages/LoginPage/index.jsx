import { useState, useContext, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";

/**
  * O componente `LoginPage` é um formulário que permite aos usuários fazer login com seu e-mail e senha,
  * exibindo uma mensagem de erro, se houver, e fornecendo links para registro e senha
  * recuperação.
  * @returns O componente LoginPage está retornando um elemento JSX que representa um formulário de login.
  */
const LoginPage = () => {
	const { login, errorMessage, clearMessageError } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		return () => {
			clearMessageError();
		};
	}, []);

	/**
	 * A função handleLogin é uma função assíncrona que impede o comportamento padrão de um
	 * e, em seguida, chama a função de login com o e-mail e a senha como parâmetros.
	 */
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
				<div className="link-container">
					<Link to="/register">
						<p>Cadastre-se</p>
					</Link>
					<Link to="/forgot-password">
						<p>Esqueceu sua senha?</p>
					</Link>
				</div>
				<div className="actions">
					<button type="submit">Entrar</button>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
