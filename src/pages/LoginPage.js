import LogimStyles from './login.styles.css'

function Logim() {
 

  const handleButtonClick = () => {
   navigator('/entrar')
  };
  return (
    <div className='body'>
      <h1 className='centro'>Login</h1>
      <div className='contener'>
        <div className='bloco'>
          <input className='input' placeholder='Dijite seu E-mail'></input>
          <input className='input'  placeholder='Dijite seu Senha' type='password'></input>
          <button className='button-login ' onClick={handleButtonClick}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default Logim;
