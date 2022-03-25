import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Header from '../../src/components/Header';
import { getAPIClient } from '../../src/services/ssr';
import { Container, NoteBody } from './styles';

type NoteData = {
  note: {
    id: string;
    title: string;
    content: string;
    description: string;
    insertedAt: Date;
  }
}

export default function Note({ note }: NoteData) {
  return (
    <Container>
      <Header />
      <NoteBody>
        <h1>Tarefa</h1>
        <h2>{note.title}</h2>
        <strong>{note.description}</strong>
        <p>{note.content}</p>
        <Link href="/notes">
          Voltar
        </Link>
      </NoteBody>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);

  const { data: { note } } = await apiClient.get(`/notes/show/${ctx.params?.noteId}`);
  
  return {
    props: {
      note
    }
  }
}