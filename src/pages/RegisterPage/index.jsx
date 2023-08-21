import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import "./styles.css";
import { Link } from "react-router-dom";

/**
  * O componente RegisterPage é um formulário que manipula o registro do usuário e exibe sucesso e erro
  * mensagens.
  * @returns O componente RegisterPage está retornando um formulário para registro do usuário.
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
	 * A função "handleRegister" é uma função assíncrona que manipula o processo de registro
	 * e exibe uma mensagem de sucesso se o registro for bem-sucedido.
	 */
	const handleRegister = async (event) => {
		event.preventDefault();
		const response = await register(name, email, password);

		if (response && response.status === 201) {
			setSuccessMessage("Cadastro realizado com sucesso!");
		}
	};

	/**
	 * A função verifica se o formulário é válido garantindo que todos os campos obrigatórios sejam preenchidos e que
	 * os campos de senha e confirmação de senha correspondem.
	 * @retorna um valor booleano indicando se o formulário é válido ou não.
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
