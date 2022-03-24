import { useContext } from 'react';
import { GetServerSideProps } from "next";

import { parseCookies } from "nookies";
import { getAPIClient } from "../../src/services/ssr";

import Header from "../../src/components/Header";
import NoteItem from '../../src/components/NoteItem';

import { Container, NotesGroup, Welcome } from "./styles";
import { AuthContext } from '../../src/context/AuthContext';

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
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Header />

      <Welcome>
        Bem vindo (a), {user?.name}
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