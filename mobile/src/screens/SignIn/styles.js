import styled from 'styled-components/native';

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
  width: 100%;
  margin-top: 40px;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999999',
})`
  width: 85%;
  height: 45px;
  background: #fff;
  border-radius: 4px;

  margin-bottom: 15px;
  padding-left: 20px;
`;
