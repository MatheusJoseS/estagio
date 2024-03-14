import React from "react";
import NavBar from "../../components/Navbar/index.jsx";
import Gustavo from './../imag/Gustavo.png'
import Aleksander from './../imag/Aleksander.png'
import Sergio from './../imag/Sergio.png'
import { Imagen } from "./styled.js";

export const Participantes = () => {
  return (
    <>
      <NavBar />
      <div><Imagen src={Gustavo} alt="Gustavo" /><p>ioribcobeo</p></div>
      <div><Imagen src={Aleksander} alt="" /><p></p></div>
      <div><Imagen src={Sergio} alt="" /><p></p></div>

    </>
  )

}