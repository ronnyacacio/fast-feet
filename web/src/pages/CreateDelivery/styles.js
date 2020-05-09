import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export const FormContainer = styled(Form)`
  padding: 30px 250px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    strong {
      font-size: 24px;
      color: #444;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    padding: 7px 15px;
  }

  .back {
    background: #ccc;
    margin-right: 20px;
  }

  .save {
    background: #7d40e7;
  }
`;

export const Content = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 20px 30px;
`;
