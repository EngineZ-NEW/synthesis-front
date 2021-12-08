import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import useInput from "../hooks/useInput";

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
        <>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    email: <input name="email" {...email}/>
                </label>
                <label>
                    password: <input name="password" {...password}/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;