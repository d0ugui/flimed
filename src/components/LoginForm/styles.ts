import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    color: #FFF;
    margin-bottom: 60px;

    span {
      color:#FF57B2;
      font-size: 50px;
    }
  }

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

  a {
    margin-left: auto;
    margin-top: 20px;
    color: #fff;
    transition: 0.4s all ease-in-out;
    text-decoration: none;

    &:hover {
      color:#FF57B2;
    }
  }
`;