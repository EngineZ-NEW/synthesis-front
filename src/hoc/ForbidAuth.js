import React from 'react';
import {Navigate} from "react-router-dom";


function ForbidAuth({children}) {
    if (localStorage.getItem("token")) {
        return <Navigate to='/'/>
    }
    return children;
}

export {ForbidAuth};