import styled from 'styled-components/native';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  flex: 1;
`;

export const Card = styled.View`
  border: #0000001a;
  padding: 15px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconShipping = styled(Icon).attrs({
  name: 'local-shipping',
  size: 25,
  color: '#7D40E7',
})``;

export const HeaderTitle = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;

  margin-left: 5px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
`;

export const Info = styled.View`
  margin: 5px 0 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #999999;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Value = styled.Text`
  font-size: 14px;
  color: #666666;
`;

export const ButtonWithdraw = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})``;

export const Withdraw = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;
`;

export const IconEvent = styled(Icon).attrs({
  name: 'event',
  size: 25,
  color: '#7D40E7',
})``;

export const Date = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const CardButton = styled.View`
  background: #f8f9fd;
  border: #0000001a;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  padding: 12px 18px;
  align-items: center;
`;

export const IconHighlight = styled(Icon).attrs({
  name: 'highlight-off',
  size: 24,
  color: '#E74040',
})``;

export const Label = styled.Text`
  font-size: 12px;
  color: #999999;
`;

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background: #0000001a;
`;

export const IconInfo = styled(Icon).attrs({
  name: 'info-outline',
  size: 24,
  color: '#E7BA40',
})``;

export const IconAlarm = styled(Icon).attrs({
  name: 'alarm-on',
  size: 24,
  color: '#7D40E7',
})``;
