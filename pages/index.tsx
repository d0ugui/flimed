import Head from 'next/head';
import type { GetServerSideProps, NextPage } from 'next';
import { parseCookies } from 'nookies';

import LoginForm from '../src/components/LoginForm';
import { getAPIClient } from '../src/services/ssr';

//* Styles
import { Container } from '../src/styles/home';


const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>To.do - Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LoginForm />
    </Container>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);

  const{ 'nextauth-token': token } = parseCookies(ctx);

  if(token) {
    return {
      redirect: {
        destination: '/notes',
        permanent: false,
      }
    }
  }

  return {
    props: {}
  }
}
