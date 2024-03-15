import React, { useState } from 'react';
import './styled.js'
import { useNavigate } from 'react-router-dom';
import { Bloco, Body, Button, Centro, Contener, Input } from './styled.js';


function Login() {

  const Navigator = useNavigate()
const [SemInfo,setSemInfo] = useState(false)
  const [from, setFrom] = React.useState({
    User: '',
    Pass: '',
  });
console.log(from);
  const getData = (e) => {
    const { name, value } = e.target;
    setFrom({ ...from, [name]: value });
  };
  const Info = () => {
    if(from.User == '' || from.Pass == '') {
     setSemInfo(true)
    }else{
      Navigator('/home')
    }
  }
  return (
    <>
      <Body>
        <Centro>Login</Centro>
        <Contener>
          <Bloco>
            <Input onChange={getData} name='User' placeholder='Dijite seu E-mail'></Input>
            <Input onChange={getData} name='Pass' placeholder='Dijite seu Senha' type='password'></Input>
            <Button onClick={Info}>Entrar</Button>
            {SemInfo && <p style={{color:'red',fontSize:'20px',marginBottom:'15px'}}>Sem Informção</p>}
          </Bloco>
        </Contener>
      </Body>
    </>
  );
}

export default Login;
