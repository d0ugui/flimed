import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 550px;

  background: #fff;
  padding: 30px;
  border-radius: 8px;

  h1 {
    margin-bottom: 30px;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;

  label {
    input {
      margin-top: 5px;
      border: 2px solid #333;
      transition: 0.4s all ease;
    }

    & + label {
      margin-top: 20px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;