import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Button } from "../Button"
import { Container, Buttons } from "./styles"

const Header = () => {
  const { signOut } = useContext(AuthContext);

  return (
    <Container>
      <h1>To-do<span>.</span></h1>
      <Buttons>
        <Button color={'#33CC95'}>Criar nota</Button>
        <Button onClick={signOut}>Logout</Button>
      </Buttons>
    </Container>
  )
}

export default Header;