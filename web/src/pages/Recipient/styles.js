import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 20px 0 0 0;
  strong {
    margin-left: 80px;
    font-size: 24px;
  }
`;

export const Actions = styled.div`
  margin: 20px 80px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 260px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid #ddd;

    input {
      height: 36px;
      width: 300px;
      font-size: 14px;
      border: none;
      margin-left: 8px;
    }
  }

  button {
    background: #7d40e3;
    display: flex;
    align-items: center;
    color: #fff;
    border-radius: 4px;
    border: none;
    padding: 5px 20px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#7d40e3')};
    }
  }
`;

export const RecipientList = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 0 80px;
    strong {
      margin: 0;
      font-size: 16px;
    }
  }
`;

export const RecipientItem = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: left;
  padding: 0 10px 0 30px;
  margin-bottom: 10px;
  border-radius: 4px;

  position: relative;
  left: -10px;
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    padding: 20px 0;
    color: #666;
  }

  p {
    margin-left: 130px;
    font-size: 16px;
    padding: 20px 0;
    color: #666;
  }
`;
