import React, {createContext, useState} from 'react';
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (email, password, cb) => {
        try {
            const response = await AuthService.login(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            setUser(response.data.user);
            cb();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const registration = async (email, password, cb) => {
        try {
            const response = await AuthService.registration(email, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            setUser(response.data.user);
            cb();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const logout = async () => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            setIsAuth(false);
            setUser({});
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    const checkAuth = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            setIsAuth(true);
            setUser(response.data.user);
        } catch (e) {
            console.log(e.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    }
    
    const value = {user, isAuth, isLoading, login, registration, logout, checkAuth}

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
