import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";
import "../login/login.css"
import logo from "../../assets/images/logo.png";
import logo_white from "../../assets/images/logo_white.png";
import {useSelector} from "react-redux";

function Register() {
    const navigate = useNavigate();
    const {registration} = useAuth();
    const themeReducer = useSelector(state => state.ThemeReducer)

    const [errorMessage, setErrorMessage] = useState('')
    const email = useInput('')
    const password = useInput('')
    const confirmPassword = useInput('')

    const handleSubmit = event => {
        event.preventDefault();
        if(password.value === confirmPassword.value) {
            registration(email.value, password.value, () => navigate('/login'), setErrorMessage)
        } else {
            setErrorMessage('Passwords don\'t match')
        }

    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-card__logo">
                    <img src={themeReducer.mode === 'theme-mode-light' ? logo : logo_white} alt="product logo"/>
                    <h1 className="login-card__logo-title">Synthesis</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="login-card__field">
                        <input type="text" name="email" placeholder="Email" {...email}/>
                    </div>
                    <div className="login-card__field">
                        <input type="password" name="password" placeholder="Password" {...password}/>
                    </div>
                    <div className="login-card__field">
                        <input type="password" name="password" placeholder="Confirm Password" {...confirmPassword}/>
                    </div>
                    <p className="login-card__error-message">{errorMessage}</p>
                    <button type="submit" className="login-card__submit">Sign Up</button>
                </form>
                <p>Already have an account? <span className="login-card__create-one"><Link to="/login">Sign in</Link></span></p>
            </div>
        </div>
    );
}

export default Register;