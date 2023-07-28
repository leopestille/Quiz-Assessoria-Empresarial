import { useState } from "react";

const ForgotPage = () => {
    const [email, setEmail] = useState("");
    
    const handleForgot = async (event) => {
        event.preventDefault();
        console.log(email);
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
            <div className="field">
            <button type="submit" className="btn">
                Enviar
            </button>
            </div>
        </form>
        </div>
    );
}

export default ForgotPage;