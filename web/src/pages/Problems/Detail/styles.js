import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  word-wrap: break-word;

  strong {
    color: #444;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
  }
`;
