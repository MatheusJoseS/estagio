import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Participantes } from "./pages/Participantes";


export const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Sobre" element={<Sobre />} />
                    <Route path="/Participantes" element={<Participantes />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}