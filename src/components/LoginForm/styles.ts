import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    width: 100%;
    color: #fff;
  }

  label + label {
    margin-top: 10px;
  }

  input {
    margin-top: 10px;
  }

  button {
    width: 100%;
    margin-top: 20px;

    border: none;
    border-radius: 4px;

    padding: 18px 0;

    cursor: pointer;

    background: #FF57B2;
    color: #fff;

    transition: 0.4s all ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;