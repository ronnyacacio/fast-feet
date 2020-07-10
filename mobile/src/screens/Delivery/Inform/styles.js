import styled from 'styled-components/native';
import { Button as Bnt } from '../../../components';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
`;

export const Input = styled.TextInput`
  height: 70%;
  padding: 35px;
  border: #0000001a;
  margin-bottom: 20px;
`;

export const Button = styled(Bnt)`
  width: 100%;
`;
