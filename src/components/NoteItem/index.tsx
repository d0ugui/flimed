import { useContext } from 'react';
import { FaCalendarAlt, FaUserAlt, FaTrashAlt, FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import dateFormat from '../../utils/dateFormat';

import { Container, Content, Infos, Options } from './styles';

type NoteData = {
  note: {
    id?: string;
    insertedAt: Date;
    content: string;
    title: string;
  }
}

const NoteItem = ({ note }: NoteData) => {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Content>
        <h2>{note?.title}</h2>
        <h3>
          {note?.content}
        </h3>
        <Infos>
          <p>
            <FaCalendarAlt />
            {dateFormat(note?.insertedAt)}
          </p>
          <p>
            <FaUserAlt/>
            {user?.name}
          </p>
        </Infos>
      </Content>
      <Options>
        <FaTrashAlt size={24} />
        <FaEdit size={24} />
      </Options>
    </Container>
  )
}

export default NoteItem;

