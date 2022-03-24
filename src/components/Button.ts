import styled from "styled-components";

export const Button = styled.button`
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
`;