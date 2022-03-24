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
`;

export const Content = styled.div``;

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

    & + svg {
      margin-left: 8px;
    }
  }

  svg:nth-child(1) {
    color: #e52e4d;
  }

  svg:nth-child(2) {
    color: #33CCad;
  }
`;