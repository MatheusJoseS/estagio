import { useNavigate } from 'react-router-dom';
import { Backgro , Button, } from './style.js'
import React from 'react';

function NavBar() {
  const Navigator = useNavigate()
  return (
    <Backgro>
      <Button onClick={() => Navigator('/Home')}>Home</Button>
      <Button onClick={() => Navigator('/Sobre')}>Sobre</Button>
      <Button onClick={() => Navigator('/Participantes')}>participantes</Button>
    </Backgro>
  );
}

export default NavBar;
