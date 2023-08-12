import { useState, useEffect, createContext } from "react";
import { api, createSession, createUser } from "../services/api/api";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext();

/**
  * O componente `AuthProvider` é um componente React que fornece funcionalidade de autenticação,
  * incluindo login, logout e registro, para seus componentes filhos.
  * @returns O componente AuthProvider está sendo retornado.
  */
export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const user = localStorage.getItem("user");
		const token = localStorage.getItem("token");

		if (user && token) {
			setUser(JSON.parse(user));
			api.defaults.headers.Authorization = `Bearer ${token}`;
		}

		setLoading(false);
		navigate("/quiz");
	}, []);

	/**
	 * A função `clearMessageError` limpa a mensagem de erro.
	 */
	const clearMessageError = () => {
		setErrorMessage("");
	};

	/**
	 * A função `login` é uma função assíncrona que tenta criar uma sessão enviando um
	 * e-mail e senha para o servidor e, se for bem-sucedido, armazena o usuário e o token no armazenamento local
	 * , define o cabeçalho de autorização para futuras solicitações de API, define o estado do usuário e navega
	 * para a página "/quiz". Se houver um erro, ele define o estado da mensagem de erro.
	 */
	const login = async (email, password) => {
		try {
			const response = await createSession(email, password);

			if (response.status === 200) {
				localStorage.setItem("user", JSON.stringify(response.data.user));
				localStorage.setItem("token", response.data.token);

				api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

				setUser(response.data.user);

				navigate("/quiz");
			}
		} catch (err) {
			if (err.message) {
				setErrorMessage(err.message);
			}
		}
	};

	/**
	 * A função `logout` remove os dados do usuário e do token do armazenamento local, limpa a autorização
	 * cabeçalho, define o estado do usuário como nulo e navega para a página de login.
	 */
	const logout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");

		api.defaults.headers.Authorization = null;

		setUser(null);
		navigate("/login");
	};

	/**
	 * A função `register` é uma função assíncrona que recebe um nome, e-mail e senha como
	 * parâmetros e tentativas de criar um usuário com essas credenciais.
	 * @returns A função `register` está retornando a resposta da função `createUser`.
	 */
	const register = async (name, email, password) => {
		try {
			const response = await createUser(name, email, password);

			return response;
		} catch (err) {
			if (err.message) {
				setErrorMessage(err.message);
			}
		}
	};

	return (
		<AuthContext.Provider
			value={{
				authenticated: !!user,
				user,
				loading,
				login,
				register,
				logout,
				errorMessage,
				clearMessageError,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
