import styled from 'styled-components/native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { Button as Btn } from '../../../components';

export const Container = styled.View`
  flex: 1;
`;

export const Button = styled(Btn)`
  width: 100%;
  margin-bottom: 10px;
`;

export const CameraContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 30px;
`;

export const ButtonPicture = styled.TouchableOpacity`
  background: transparent;
  align-self: flex-end;
  align-items: center;
`;

export const IconCamera = styled(FontAwesome).attrs({
  name: 'camera',
  size: 40,
  color: '#fff',
})``;

export const Img = styled.ImageBackground`
  flex: 1;
  margin-bottom: 10px;
`;

export const ImgContent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin: 30;
`;

export const ButtonClose = styled.TouchableOpacity`
  background: transparent;
  align-self: flex-start;
  align-items: center;
  margin: 10px 0 0 10px;
`;

export const IconClose = styled(MaterialIcons).attrs({
  name: 'close',
  size: 40,
  color: '#fff',
})``;
