import axios from "axios";

/* O código `export const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });` é
criando uma instância da biblioteca Axios com uma URL base. */
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

/**
 * A função `createSession` é uma função assíncrona que envia uma requisição POST para
 * o endpoint "/sessions" com o email e senha informados, e retorna a resposta.
 * @param email - O parâmetro email é o endereço de email do usuário que está tentando criar uma sessão ou
 * conectar-se.
 * @param password - O parâmetro `password` é a senha do usuário que é  fornecida para tentar
 * criar a sessão.
 * @returns A resposta da chamada de API está sendo retornada.
 */
export const createSession = async (email, password) => {
    try {
        const response = await api.post("/sessions", { email, password });
        return response;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

/**
  * A função `createUser` é uma função assíncrona que envia uma solicitação POST para criar um novo usuário
  * com o nome, e-mail e senha fornecidos e retorna os dados e o status da resposta.
  * @param name - O parâmetro name é o nome do usuário que você deseja criar.
  * @param email - O parâmetro email é o endereço de email do usuário que você deseja criar.
  * @param password - O parâmetro `password` é a senha que o usuário deseja definir para
  * conta.
  * @returns A função `createUser` está retornando um objeto com duas propriedades: `data` e `status`.
  * A propriedade `data` contém os dados de resposta da chamada de API e a propriedade `status` contém
  * o código de status da resposta.
  */
export const createUser = async (name, email, password) => {
    try {
        const response = await api.post("/users", { name, email, password });
        return { data: response.data, status: response.status };
    } catch (error) {
        throw new Error(
          error.response ? error.response.data.message : error.message
        );
    }
}