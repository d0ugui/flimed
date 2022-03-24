import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useForm } from 'react-hook-form'
import { Button } from "../Button";
import { Input } from "../Input";
import { Overlay, Container, Content, Buttons } from "./styles";

type ModalProps = {
  setModal: (state: boolean) => void;
}

type ModalData = {
  title: string;
  content: string;
  description: string;
}

const Modal = ({ setModal } : ModalProps) => {
  const { newTask } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<ModalData>();

  async function handleNewTask(data: ModalData) {
    try {
      const { message } = await newTask(data);

      setModal(false);
      alert(message);
    } catch (error) {
      console.log('Erro: ', error);
    }
  }

  return (
    <Overlay>
      <Container>
        <h1>Criar nova tarefa</h1>
        <Content onSubmit={handleSubmit(handleNewTask)}>
          <label>
            Título
            <Input
              {...register('title')}
              type="text" 
              placeholder="Título da tarefa"
            />
          </label>

          <label>
            Conteúdo
            <Input
              {...register('content')}
              type="text" 
              placeholder="Conteúdo da tarefa"
            />
          </label>

          <label>
            Descrição
            <Input
              {...register('description')}
              type="text" 
              placeholder="Descrição da tarefa"
            />
          </label>

          <Buttons>
            <Button>
              Enviar
            </Button>
            <Button onClick={() => setModal(false)}>
              Voltar
            </Button>
          </Buttons>
        </Content>
      </Container>
    </Overlay>
  )
}

export default Modal;