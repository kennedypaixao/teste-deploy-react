import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

import AuthContext from '../../context/auth/AuthContext';
import LogoImage from '../../assets/image/logo.png';

import './Login.scss';

const Login: React.FC = () => {
  const _navigate = useNavigate();
  const _auth = React.useContext(AuthContext);
  const _location = useLocation();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const [ showPassword, setShowPassword ] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const _handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('aqui')

    const clientId =  '747a39aa-bb5c-437d-890e-252308d9d91c';
    const secretKey = '$2a$12$Gj0xiEtIbLflahFXjMkoCOoTaS5UXhfPSh5NMhNDq/Ld6RsGPsoMe';  

    const token = await axios.post('https://web.consorciomagalu.com.br/api/portal-relatorios/Auth', { clientId , secretKey});

    window.sessionStorage.setItem('token', token.data.data.token);

    try {
      const data = await axios.post('https://web.consorciomagalu.com.br/api/portal-relatorios/Account', { email, password } , { headers: {
        "Authorization": "Bearer " + token.data.data.token
      }});

      if(data){
        _auth.SignIn(email, () => {
          const locationState = _location.state as any;
          _navigate(locationState?.from?.pathname || '/Dashboard', { replace: true });
        });
      }
    } catch (error: any) {
      if(error.response.data.code === 1)
        return setError('E-mail ou senha inválidos.');

      setError(error.response.data.message);
    }
    
  };

  return (
    <section className="Login">
      <div className="card">
        <h2 className="title"><img src={LogoImage} height={64} width={220}/></h2>
        <h2 className="brand-title">Login</h2>

        <form className='formLogin' onSubmit={_handleSubmit}>
          <TextField 
            label='E-mail' 
            variant='outlined'
            value={email}
            error={!!error}
            onChange={(event) => setEmail(event.target.value)}
            InputProps={{
              endAdornment: (
                <div style={{display: 'flex', justifyContent: 'center', width: '25px'}}>
                  <FontAwesomeIcon icon={faUser} color="#0086ff" />
                </div>
              ),
            }}
          />

          <TextField 
            label='Senha'
            type={showPassword ? 'text' : 'password'} 
            variant='outlined' 
            value={password}
            error={!!error}
            helperText={error}
            onChange={(event) => setPassword(event.target.value)}
            InputProps={{
              endAdornment: (
                <div onClick={handleShowPassword} style={{cursor: 'pointer', display: 'flex', justifyContent: 'center', width: '25px'}}>
                  <FontAwesomeIcon icon={showPassword ? faLockOpen : faLock} color="#0086ff" />
                </div>
              ),
            }}
          />
          <div className='forgotPassword'>
            <Button size='small' type='button' variant='text'>Esqueci a senha</Button>
          </div>

          <div className='login'>
            <Button size='large' type='submit' variant='contained'>Login</Button>
          </div>
        </form>
        

      </div>
    </section>
  );
};

export default Login;
