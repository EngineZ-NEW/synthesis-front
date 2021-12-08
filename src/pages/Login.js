import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

function Login(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const fromPage = location.state?.from?.pathname || '/';

    return (
        <>
            <h1>Login page</h1>
            {fromPage}
        </>
    );
}

export default Login;