import { useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

/**
  * A função `ResetPasswordPage` é um componente React que lida com a funcionalidade de redefinição de senha,
  * incluindo validação de formulário e chamadas de API.
  * @returns O código está retornando um elemento JSX, especificamente um elemento `<div>` com um id de
  * "reset__form". Dentro do `<div>`, há um elemento `<form>` com um className de "form" e um
  * manipulador de eventos onSubmit definido como `handleResetPassword`. Dentro do `<form>`, existe um elemento `<h1>`
  * com um className de "reset" e o texto "
  */
const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState(null);
	const { token } = useParams();
	const URL = import.meta.env.VITE_APP_API_URL;

	/**
	 * A função `handleResetPassword` é uma função assíncrona que manipula a lógica para
	 * redefinir uma senha, incluindo verificar se a senha e confirmar a senha correspondem, fazendo um POST
	 * solicitar a um URL especificado com a senha e lidar com quaisquer erros que ocorram durante o
	 * processo.
	 * @returns A função `handleResetPassword` não possui uma declaração de retorno.
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
