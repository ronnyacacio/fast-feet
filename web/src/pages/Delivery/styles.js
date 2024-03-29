import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { setBackground, setColor } from '~/utils/selectColor';
import colors from '~/utils/palete';

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
    width: 240px;
    background: #fff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    border: 1px solid #ddd;

    input {
      width: 200px;
      height: 36px;
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

export const DeliveryList = styled.div`
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

export const DeliveryItem = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: left;
  padding: 0 10px 0 30px;
  border-radius: 4px;
  margin-bottom: 20px;

  span {
    font-size: 16px;
    padding: 20px 0;
    color: #666;
  }

  aside {
    position: relative;
    right: -10px;
    background: ${(props) => setBackground(props.status)};
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    padding: 0 10px;

    p {
      color: ${(props) => setColor(props.status)};
      font-size: 14px;
      font-weight: bold;
    }
  }
`;

export const Deliveryman = styled.div`
  position: relative;
  left: -10px;
  display: flex;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  > div {
    background: ${(props) => colors.background[props.initialColors]};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;

    > span {
      font-size: 16px;
      color: ${(props) => colors.color[props.initialColors]};
    }
  }
`;

export const ContainerButtonPage = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 500px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #7d40e3;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#7d40e3')};
    }

    &.back {
      ${(props) =>
        props.page === 1
          ? css`
              cursor: default;
              background: #ccc;
            `
          : ''}
    }

    &.next {
      ${(props) =>
        props.countDelivery <= 10 || props.product
          ? css`
              cursor: default;
              background: #ccc;
            `
          : ''}
    }
  }
`;
