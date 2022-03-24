import { GetServerSideProps } from 'next';
import React, { useContext } from 'react';
import { parseCookies } from 'nookies';

import { AuthContext } from '../src/context/AuthContext';

import { getAPIClient } from '../src/services/ssr';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>{user?.name}</h1>
    </div>
  )
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);

  const{ 'nextauth-token': token } = parseCookies(ctx);

  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const notes = await apiClient.get('/users/show');

  console.log(notes);

  return {
    props: {}
  }
}