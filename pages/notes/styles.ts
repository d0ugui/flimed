import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;

export const NotesGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 50px;

  li + li {
    margin-top: 40px;
  }
`;

export const Welcome = styled.h1`
  color: #fff;
  margin-top: 60px;

  span {
    color: #FF57B2;
  }
`;