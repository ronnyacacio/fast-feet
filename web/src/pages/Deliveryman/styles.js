import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ClipLoader } from 'react-spinners';
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

export const DeliverymanList = styled.div`
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

export const Loading = styled(ClipLoader).attrs({
  css: css`
    position: absolute;
    left: 48%;
    top: 50%;
  `,
})``;

export const Scroll = styled(PerfectScrollbar)`
  padding: 0 80px;
  max-height: 380px;
`;

export const DeliverymanItem = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: left;
  padding: 0 10px 0 30px;
  margin-bottom: 10px;
  border-radius: 4px;

  position: relative;
  left: -10px;
  display: flex;
  align-items: center;

  display: flex;

  span {
    font-size: 16px;
    padding: 20px 0;
    color: #666;
  }

  p {
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

export const Picture = styled.div`
  margin-left: 90px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
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
`;
