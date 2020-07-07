import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #7d40e7;

  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image``;

export const Form = styled.View`
  margin-top: 40px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  width: 300px;
  height: 45px;
  background: #fff;
  border-radius: 4px;

  margin-bottom: 15px;
  padding-left: 20px;
`;

export const Button = styled(RectButton)`
  width: 300px;
  height: 45px;
  background: #82bf18;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
