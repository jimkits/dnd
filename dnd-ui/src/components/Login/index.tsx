import { useState } from "react";
import { useNavigate } from "react-router";
import { validateLogin } from "./validate-login";
import "./style.css";

function Login({ setLoggedIn }: { setLoggedIn: (value: boolean) => void }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        setError("");

        const result = await validateLogin(username, password);

        if (result.success) {
            sessionStorage.setItem("loggedIn", "true");
            setLoggedIn(true);
            navigate("/");
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Dungeons & Dragons</h1>
                <h2 className="login-subtitle">Enter the Realm</h2>

                {error && <p className="login-error">{error}</p>}

                <input
                    className="login-input"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">
                    Login
                </button>
                <h3>The following users are available</h3>
                <p>admin-admin</p>
            </form>
        </div>
    );
}

export default Login;
