import { useContext } from 'react';
import { FaCalendarAlt, FaUserAlt, FaTrashAlt, FaRegCommentAlt } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthContext';
import dateFormat from '../../utils/dateFormat';

import { Container, Content, Infos, Options } from './styles';

type NoteData = {
  note: {
    id: string;
    insertedAt: Date;
    content: string;
    title: string;
  }
}

const NoteItem = ({ note }: NoteData) => {
  const { user, deleteTask } = useContext(AuthContext);

  async function handleDeleteTask(id: string) {
    const {statusText, message} = await deleteTask(id);
    
    alert(message);
  }

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
        <FaTrashAlt 
          size={24} 
          onClick={() => handleDeleteTask(note?.id)}
        />
        <FaRegCommentAlt size={24} />
      </Options>
    </Container>
  )
}

export default NoteItem;

