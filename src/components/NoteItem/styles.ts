import styled from "styled-components";

export const Container = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 28px;
  }

  h3 {
    color: #D7D7D7;
    margin-top: 8px;
  }

  a { 
    cursor: pointer;
  }
`;

export const Content = styled.div`
  cursor: pointer;
  width: 100%;
  transition: 0.4s all ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  gap: 24px;

  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #BBBBBB;

    svg {
      margin-right: 8px;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  svg {
    cursor: pointer; 
    transition: 0.4s all ease;

    &:hover {
      transform: scale(1.5);;
    }

    & + svg {
      margin-left: 8px;
    }
  }

  svg:nth-child(1) {
    color: #e52e4d88;
  }

  svg:nth-child(2) {
    color: #33CCad;
  }
`;