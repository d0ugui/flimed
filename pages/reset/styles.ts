import styled from "styled-components";
import { Button } from "../../src/components/Button";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #fff;
    margin-bottom: 60px;
  }
`;

export const Return = styled(Button)`
  background: #e52e4d;
`;