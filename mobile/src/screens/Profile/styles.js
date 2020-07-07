import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Img = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 65px;
  background: #000;
`;

export const Info = styled.View`
  width: 80%;
  margin: 50px 0 20px;
  justify-content: flex-start;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666;
`;

export const Description = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Button = styled(RectButton)`
  height: 40px;
  width: 80%;
  border-radius: 4px;
  background: #e74040;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
