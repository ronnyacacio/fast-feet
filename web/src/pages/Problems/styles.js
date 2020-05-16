import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ClipLoader } from 'react-spinners';

export const Container = styled.div`
  padding: 20px 0 0 0;
  strong {
    margin-left: 80px;
    font-size: 24px;
  }
`;

export const ProblemList = styled.div`
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
  height: 380px;
`;

export const ProblemItem = styled.div`
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
    font-size: 16px;
    padding: 20px 0;
    color: #666;
  }
`;
