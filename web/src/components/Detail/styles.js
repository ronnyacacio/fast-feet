import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-weight: bold;
    font-size: 14px;
    color: #444;
    margin-bottom: 5px;
  }

  span {
    font-size: 16px;
    color: #666;
    margin: 2px 0;
  }

  strong {
    color: #444;
  }

  hr {
    margin: 8px 0;
    color: #999;
  }
`;
