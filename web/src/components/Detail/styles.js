import styled from 'styled-components';

export const Delivery = styled.div`
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

  img {
    width: 250px;
    height: 50px;
    padding: 0 20px;
    border-radius: 4px;
  }
`;

export const Problem = styled.div`
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
