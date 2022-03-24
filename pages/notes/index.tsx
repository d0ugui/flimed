import Head from 'next/head'
import { useState, useContext } from 'react';
import { GetServerSideProps } from "next";

import { parseCookies } from "nookies";
import { getAPIClient } from "../../src/services/ssr";

import Header from "../../src/components/Header";
import NoteItem from '../../src/components/NoteItem';

import { Container, NotesGroup, Welcome } from "./styles";
import { AuthContext } from '../../src/context/AuthContext';
import Modal from '../../src/components/Modal';

type NoteData = {
  id: string;
  insertedAt: Date;
  content: string;
  title: string;
}

type NotesData = {
  notes: Array<NoteData>;
}

const Notes = ({ notes }: NotesData) => {
  const [modal, setModal] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Head>
        <title>To.do - Notes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {modal && <Modal 
        setModal={setModal}
      />}
      <Header 
        setModal={setModal}
      />

      <Welcome>
        Bem vindo (a), <span>{user?.name}</span>
      </Welcome>

      <NotesGroup>
        {notes?.map((note) => (
          <NoteItem 
            key={note.id} 
            note={note}
          />
        ))}
      </NotesGroup>
    </Container>
  )
}

export default Notes;

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

  const { data: { notes } }= await apiClient.get('/users/show');

  return {
    props: {
      notes
    }
  }
}