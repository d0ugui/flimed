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

export const NoteBody = styled.div`
  width: 100%;
  color: #fff;

  h1 {
    margin-top: 60px;
    text-transform: uppercase;
  }

  h2 {
    margin-top: 40px;
    display: inline-block;
  }

  strong {
    background: #bbb;
    padding: 5px;
    border-radius: 8px;
    margin-left: 6px;
  }
  
  p {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  a {
    text-decoration: none;
    color: #FFF;
    background: #e52e4d;
    padding: 15px 30px;
    border-radius: 24px;
    margin-top: 50px;
  }
`;