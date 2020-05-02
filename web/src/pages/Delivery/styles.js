import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { darken } from 'polished';
import { GiPlainCircle } from 'react-icons/gi';

export const Container = styled.div`
  padding: 20px 80px;
  strong {
    font-size: 24px;
  }
`;

export const Actions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    width: 240px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    input {
      height: 36px;
      font-size: 14px;
      border-radius: 4px;
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

export const DeliveryList = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    strong {
      font-size: 16px;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 390px;
`;

export const DeliveryItem = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: left;
  padding: 0 20px;
  margin-bottom: 10px;
  border-radius: 4px;

  div {
    position: relative;
    left: -10px;
    display: flex;
    align-items: center;

    div {
      background: #f4effc;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      span {
        font-size: 16px;
        color: #a28fd0;
      }
    }
  }

  span {
    font-size: 16px;
    padding: 20px 0;
  }

  aside {
    position: relative;
    left: -25px;
    background: #dff0df;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    padding: 0 10px;
    p {
      color: #2ca42b;
      font-size: 14px;
      margin-left: 5px;
      font-weight: bold;
    }
  }
`;

export const Ball = styled(GiPlainCircle).attrs({
  color: '#2ca42b',
  size: 10,
})``;
