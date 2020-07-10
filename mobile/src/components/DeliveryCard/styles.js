import styled from 'styled-components/native';
import { MaterialIcons as Icon } from '@expo/vector-icons';

export const Container = styled.View`
  border: #0000001a;

  margin-bottom: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  padding: 10px 15px;
`;

export const IconShipping = styled(Icon).attrs({
  name: 'local-shipping',
  size: 25,
  color: '#7D40E7',
})``;

export const Name = styled.Text`
  font-size: 14px;
  color: #7d40e7;
  font-weight: bold;

  margin-left: 10px;
`;

export const DeliveryStatus = styled.View`
  justify-content: space-between;
  padding: 20px 25px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 8px;
`;

export const Dash = styled.View`
  width: 110px;
  height: 1px;
  background: #7d40e3;
`;

export const BotOne = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: #7d40e3;

  background: #7d40e3;
`;

export const BotTwo = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: #7d40e3;

  background: ${({ status }) => (status ? '#7d40e3' : 'transparent')};
`;

export const BotThree = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: #7d40e3;

  background: ${({ status }) => (status ? '#7d40e3' : 'transparent')};
`;

export const LabelsContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const WaitWithdrawal = styled.View`
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 8px;
  color: #999999;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  background: #f8f9fd;
  padding: 20px;
`;

export const InfoValue = styled.View``;

export const Title = styled.Text`
  font-size: 8px;
  color: #999999;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 12px;
  color: #444444;
  font-weight: bold;
`;

export const Detail = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3,
})`
  /* padding: 10px; */
`;

export const TextDetail = styled.Text`
  font-size: 12px;
  color: #7d40e7;
  font-weight: bold;
`;
