import styled from 'styled-components';

export const Container = styled.td`
  position: relative;
  margin-right: 35px;
  button {
    background: none;
    border: 0;
  }
`;

export const Actions = styled.div`
  position: absolute;
  right: -67px;
  z-index: 2;
  box-shadow: 0px 0px 2px #00000026;
  background: #fff;
  padding: 15px 10px;
  border-radius: 4px;
  min-width: 150px;
  white-space: nowrap;
  margin-top: 5px;
  display: ${(props) => (props.visible ? 'flex' : 'none')} !important;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f1f1f1;
  }

  div {
    width: 100%;

    & + div {
      border-top: 1px solid #eee;
      margin-top: 5px;
      padding-top: 5px;
    }

    button,
    a {
      border: 0;
      background: none;
      color: #999;
      font-size: 16px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
