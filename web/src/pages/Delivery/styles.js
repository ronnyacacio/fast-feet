import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ClipLoader } from 'react-spinners';
import { darken } from 'polished';

import { setBackground, setColor } from '~/utils/selectColor';
import colors from '~/utils/palete';

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
    padding: 20px;

    strong {
      font-size: 16px;
    }
  }
`;

export const Loading = styled(ClipLoader).attrs({
  css: css`
    position: absolute;
    left: 48%;
    top: 50%;
  `,
})``;

export const Scroll = styled(PerfectScrollbar)`
  position: relative;
  max-height: 400px;
`;

export const DeliveryItem = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: left;
  padding: 0 10px 0 30px;
  margin-bottom: 10px;
  border-radius: 4px;

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
  &.initials {
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

    div {
      background: ${(props) => colors.background[props.initialColors]};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;

      span {
        font-size: 16px;
        color: ${(props) => colors.color[props.initialColors]};
      }
    }
  }
`;
