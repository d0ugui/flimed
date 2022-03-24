import type { NextPage } from 'next';

import LoginForm from '../src/components/LoginForm';

//* Styles
import { Container } from '../src/styles/home';

const Home: NextPage = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  )
}

export default Home
