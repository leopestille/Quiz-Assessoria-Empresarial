import axios from "axios";

export const api = axios.create({
    baseURL: "process.env.REACT_APP_API_URL",
});

export const createSession = async (email, password) => {
    try {
        const response = await api.post("/sessions", { email, password });
        return response;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}

export const createUser = async (name, email, password) => {
    try {
        const response = await api.post("/users", { name, email, password });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
}