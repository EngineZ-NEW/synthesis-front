import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                        <Route element={<Activity />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;