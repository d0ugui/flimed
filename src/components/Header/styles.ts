import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    color: #fff;
    
    span {
      color: #FF57B2;
      font-size: 50px;
    }
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;

  button {
    padding: 15px 15px;
  
    & + button {
      margin-right: 10px;
    }
  }
`;