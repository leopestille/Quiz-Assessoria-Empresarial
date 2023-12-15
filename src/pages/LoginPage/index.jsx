import { useState, useContext, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth";


const LoginPage = () => {
	const { login, errorMessage, clearMessageError } = useContext(AuthContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordError, setPasswordError] = useState(null);

	useEffect(() => {
		return () => {
			clearMessageError();
		};
	}, []);

	const validatePassword = (password) => {
		const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
		return re.test(password);
	}


	const handleLogin = async (event) => {
		event.preventDefault();
		if (!validatePassword(password)) {
			setPassword("A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um número.");
			return;
		}
		setPasswordError(null);
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
					{passwordError && <p className="error">{passwordError}</p>}
				</div>
				{errorMessage && <p className="error">{errorMessage}</p>}{" "}
				{}
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
