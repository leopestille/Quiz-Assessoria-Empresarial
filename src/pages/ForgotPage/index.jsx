import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPage = () => {
    const [email, setEmail] = useState("");
    
    const handleForgot = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post("/forgot-password", {
                email
            });
            console.log(response.data)
        } catch (error) {
            if (error.response) {
                console.log(error.responde.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log("ERROR:", error.message);
            }
            console.log(error.config);
        }
    };
    
    return (
        <div id="forgot__form">
        <form className="form" onSubmit={handleForgot}>
            <h1 className="forgot">Esqueceu sua senha?</h1>
            <h2>Digite seu email abaixo para receber o link de redefinição de senha</h2>
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
            <div className="link-container">
            <Link to="/login">
                <p>Voltar a área de Login</p>
            </Link>
            <button type="submit" className="btn">
                Enviar
            </button>
            </div>
        </form>
        </div>
    );
}

export default ForgotPage;