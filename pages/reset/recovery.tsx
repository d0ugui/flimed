import Link from 'next/link';
import Router from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { Button } from '../../src/components/Button';

import { Input } from '../../src/components/Input';

import { Container, Content, Return } from "./styles";
import { AuthContext } from '../../src/context/AuthContext';

type NewPasswordData = {
  key: string;
  password: string;
}

const Recovery = () => {
  const { newPassword } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  async function handleNewPassword(data: NewPasswordData) {
    try {
      if (!data.key || !data.password) {
        return alert('Preencha os campos');
      }

      const { statusText, message } = await newPassword(data);

      if(statusText) {
        alert(message);
        Router.push('/');
      }
    } catch (error) {
      console.log('Erro: ', error)
    }
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit(handleNewPassword)}>
        <h1>Recuperando senha</h1>
        <Input 
          {...register('key')}
          type="string"
          placeholder="Insira sua Recovery Key"
        />
        <Input 
          {...register('password')}
          type="password"
          placeholder="Insira sua Nova senha"
        />
        <Button>Recuperar senha</Button>
        <Link href="/" passHref>
          <Return>Voltar</Return>
        </Link>
      </Content>
    </Container>
  )
}

export default Recovery;