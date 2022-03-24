import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

import { AuthContext } from '../../context/AuthContext';

import { Input } from '../Input';

import { Container } from './styles';
import { Button } from '../Button';

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
      <h1>To-do App<span>.</span></h1>
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

      <Link href="/reset">
        Esqueceu a senha?
      </Link>

      <Button>Entrar</Button>
    </Container>
  )
}

export default LoginForm;