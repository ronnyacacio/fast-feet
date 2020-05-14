import styled from 'styled-components';
import colors from '~/utils/palete';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  label {
    cursor: pointer;
    transition: opacity 0.2s;
    &:hover {
      opacity: 0.7;
    }

    div {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: ${(props) => (props.initials ? 'none' : '2px dashed #ddd')};
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      &.initials {
        background: ${(props) => colors.background[props.initialColors]};
        border: 2px dashed #ddd;

        p {
          font-size: 66px;
          color: ${(props) => colors.color[props.initialColors]};
        }
      }

      strong {
        margin-top: 5px;
        color: #ccc;
      }
    }
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }
    input {
      display: none;
    }
  }
`;
