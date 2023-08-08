import axios from "axios";

/* The code `export const api = axios.create({ baseURL: import.meta.env.VITE_APP_API_URL });` is
creating an instance of the Axios library with a base URL. */
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

/**
 * The function `createSession` is an asynchronous function that sends a POST request to the
 * "/sessions" endpoint with the provided email and password, and returns the response.
 * @param email - The email parameter is the email address of the user trying to create a session or
 * log in.
 * @param password - The `password` parameter is the user's password that they provide when trying to
 * create a session (i.e., log in).
 * @returns The response from the API call is being returned.
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
 * The function `createUser` is an asynchronous function that sends a POST request to create a new user
 * with the provided name, email, and password, and returns the response data and status.
 * @param name - The name parameter is the name of the user that you want to create.
 * @param email - The email parameter is the email address of the user that you want to create.
 * @param password - The `password` parameter is the password that the user wants to set for their
 * account.
 * @returns The `createUser` function is returning an object with two properties: `data` and `status`.
 * The `data` property contains the response data from the API call, and the `status` property contains
 * the status code of the response.
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