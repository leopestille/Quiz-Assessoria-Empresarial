import { useState, useEffect, createContext } from "react";
import { api, createSession, createUser } from "../services/api/api";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext();

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

  const clearMessageError = () => {
    setErrorMessage("");
  };

  const login = async (email, password) => {
    try {
      const response = await createSession(email, password);

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

        setUser(response.data.user);
        console.log(setUser(response.data.user));

        navigate("/quiz");
      }
    } catch (err) {
      if (err.message) {
        setErrorMessage(err.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    api.defaults.headers.Authorization = null;

    setUser(null);
    navigate("/login");
  };

  const register = async (name, email, password) => {
    try {
      const response = await createUser(name, email, password);

      if (response.status === "success") {
        navigate("/login");
      }
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
