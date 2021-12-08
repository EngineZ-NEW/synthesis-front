import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import Login from "./pages/Login";
import {RequireAuth} from "./hoc/RequireAuth";
import {useAuth} from "./hooks/useAuth";
import {ForbidAuth} from "./hoc/ForbidAuth";
import Loader from "./components/loader/loader";

function App() {
    const {checkAuth, isLoading} = useAuth();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<RequireAuth ><Dashboard /> </RequireAuth>} />
                            <Route path="activity" element={<RequireAuth> <Activity/> </RequireAuth>} />
                            <Route path="*" element={<h1>404</h1>} />
                            <Route path="login" element={<ForbidAuth> <Login /> </ForbidAuth>} />
                        </Route>
                    </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;