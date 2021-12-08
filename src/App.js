import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import Login from "./pages/Login";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";

function App() {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Dashboard />} />
                            <Route path="activity" element={<RequireAuth> <Activity/> </RequireAuth>} />
                            <Route path="*" element={<h1>404</h1>} />
                            <Route path="login" element={<Login />} />
                        </Route>
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    );
}

export default App;