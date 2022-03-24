import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';

import { AuthContext } from '../../context/AuthContext';

import { Input } from '../Input';

import { Container } from './styles';

interface FormProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  async function handleSignIn(data : FormProps) {
    await signIn(data);
  } 

  return (
    <Container onSubmit={handleSubmit(handleSignIn)}>
      <label>
        Login
        <Input 
          {...register('email')}
          type="email"
          placeholder="Insira seu email"
        />
      </label>
      
      <label>
        Password
        <Input 
          {...register('password')}
          type="password"
          placeholder="Insira sua senha"
        />
      </label>
      <button>
        Entrar
      </button>
    </Container>
  )
}

export default LoginForm;