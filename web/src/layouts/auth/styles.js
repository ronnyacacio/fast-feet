import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  text-align: center;
  background: #fff;
  padding: 60px 30px;
  border-radius: 4px;
  width: 360px;

  img {
    width: 300px;
    height: 50px;
    padding: 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  }

  span {
    font-size: 14px;
    color: #444;
    font-weight: bold;
    align-self: flex-start;
    margin-bottom: 10px;
  }

  input {
    font-size: 16px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    color: #333;
    margin: 0 0 10px;

    &::placeholder {
      color: #999;
    }
  }

  button {
    background: #7d40e7;
    border-radius: 4px;
    height: 45px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#7d40e7')};
    }
  }
`;
