import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/client/login/LoginPage";
import Dashboard from "./pages/client/dashboard/Dashboard";
import ThreeScene from "./Components/ThreeScene/ThreeScene";


const AppRouter = ()=>{
    return(
        <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/client/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/client/dashboard" element={<Dashboard />} />
                <Route path="/client/scene" element={<ThreeScene />} />
        </Routes>
    )
}


export default AppRouter;