import React from "react";
import NavBar from "../../components/Navbar";
import {Image} from "./styled.js";
import Imagem from "./../imag/Foto-TI.png";

export const Home = () =>{
  return(
    <>
 <NavBar/>
<Image src={Imagem} alt="Imagen" />
    </>
  )

}