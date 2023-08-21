import axios from "axios";

const LOCAL_TEST_API_URL = "http://localhost:3333";

const baseURL = LOCAL_TEST_API_URL;

export const api = axios.create({
	baseURL: baseURL,
});

export const createSession = async (email, password) => {
    try {
        const response = await api.post("/sessions", { email, password });
        console.log(response);
        return response;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const createUser = async (name, email, password) => {
    try {
        const response = await api.post("/users", { name, email, password });
        console.log(response);
        return response.data;
    } catch (error) {
        throw new Error(
          error.response ? error.response.data.message : error.message
        );
    }
}