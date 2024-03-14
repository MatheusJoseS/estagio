import React from 'react';
import './styled.js'
import { useNavigate } from 'react-router-dom';
import { Bloco, Body, Button, Centro, Contener, Input } from './styled.js';


function Login() {
  const Navigator = useNavigate()
  return (
    <>
      <Body>
        <Centro>Login</Centro>
        <Contener>
          <Bloco>
            <Input placeholder='Dijite seu E-mail'></Input>
            <Input placeholder='Dijite seu Senha' type='password'></Input>
            <Button onClick={() => Navigator('/home')}>Entrar</Button>
          </Bloco>
        </Contener>
      </Body>
    </>
  );
}

export default Login;
