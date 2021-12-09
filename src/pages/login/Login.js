import React from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";
import "./login.css"
import logo from "../../assets/images/logo.png";

function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const {login} = useAuth();
    
    const email = useInput('')
    const password = useInput('')

    const fromPage = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        login(email.value, password.value, () => navigate(fromPage, {replace: true}))
    }

return (
    <div className="login-container">
        <div className="login-card">
            <div className="login-card__logo">
                <img src={logo} alt="product logo"/>
                <h1 className="login-card__logo-title">Synthesis</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="login-card__field">
                    <input type="text" name="email" placeholder="Email" {...email}/>
                </div>
                <div className="login-card__field">
                    <input type="password" name="password" placeholder="Password" {...password}/>
                </div>
                <button type="submit" className="login-card__submit">Sign In</button>
            </form>
            <p>Don't have an account? <Link to="/">Create one</Link></p>
        </div>
    </div>
    );
}

export default Login;