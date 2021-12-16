import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import {RequireAuth} from "./hoc/RequireAuth";
import {useAuth} from "./hooks/useAuth";
import {ForbidAuth} from "./hoc/ForbidAuth";
import Loader from "./components/loader/loader";
import Register from "./pages/register/Register";

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
                            <Route index element={<Dashboard /> } />
                            <Route path="activity" element={<RequireAuth> <Activity/> </RequireAuth>} />
                            <Route path="profile" element= {<Profile />}/>  
                            <Route path="*" element={<h1>404</h1>} />
                            <Route path="login" element={<ForbidAuth> <Login /> </ForbidAuth>} />
                            <Route path="register" element={<ForbidAuth> <Register/> </ForbidAuth>} />

                        </Route>
                    </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;