import { useState, useEffect, createContext } from "react";
import { api, createSession, createUser } from "../services/api/api";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext();

/**
 * The `AuthProvider` component is a React component that provides authentication functionality,
 * including login, logout, and registration, to its child components.
 * @returns The AuthProvider component is being returned.
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
   * The function `clearMessageError` clears the error message.
   */
  const clearMessageError = () => {
    setErrorMessage("");
  };

  /**
   * The `login` function is an asynchronous function that attempts to create a session by sending an
   * email and password to the server, and if successful, it stores the user and token in local
   * storage, sets the authorization header for future API requests, sets the user state, and navigates
   * to the "/quiz" page. If there is an error, it sets the error message state.
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
   * The `logout` function removes user and token data from local storage, clears the authorization
   * header, sets the user state to null, and navigates to the login page.
   */
  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  /**
   * The `register` function is an asynchronous function that takes in a name, email, and password as
   * parameters and attempts to create a user with those credentials.
   * @returns The `register` function is returning the response from the `createUser` function.
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
