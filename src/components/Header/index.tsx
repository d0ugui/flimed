import { Button } from "../Button"
import { Container, Buttons } from "./styles"

const Header = () => {
  return (
    <Container>
      <h1>To-do<span>.</span></h1>
      <Buttons>
        <Button color={'#33CC95'}>Criar nota</Button>
        <Button>Logout</Button>
      </Buttons>
    </Container>
  )
}

export default Header;