import Link from 'next/link';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../../src/components/Button';
import { Input } from '../../src/components/Input';
import { AuthContext } from '../../src/context/AuthContext';

import { Container, Content, Return } from './styles';

interface RecoveryData {
  email: string;
}

const Reset = () => {
  const { resetPassword } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  async function handleResetPassword(data: RecoveryData) {
    try {
      if(!data.email) {
        return alert('Preencha o campo')
      }

      const { statusText, message } = await resetPassword(data);

      if (statusText) {
        alert(message);
      }
    } catch (error) {
      console.log('error: ', error)
    } finally {

    }
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleResetPassword)}>
        <h1>Recuperar Senha</h1>
        <Input 
          {...register('email')}
          type="email"
          placeholder="Insira seu email"
        />
       <Button>Recuperar senha</Button>
       <Link href="/" passHref>
        <Return>Voltar</Return>
       </Link>
      </Content>
    </Container>
  )
}

export default Reset;