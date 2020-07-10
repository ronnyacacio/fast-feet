import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';

const { statusBarHeight } = Constants;

export const Container = styled.View`
  flex: 1;

  padding: 0 20px;
  background: #fff;
`;

export const Header = styled.View`
  margin-top: ${statusBarHeight + 20}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 68px;
  height: 68px;
  border-radius: 34px;
  margin-right: 10px;
`;

export const Data = styled.View``;

export const Hello = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const ButtonIconLogout = styled.TouchableOpacity``;

export const IconLogout = styled(MaterialIcons).attrs({
  name: 'exit-to-app',
  size: 25,
  color: '#E74040',
})`
  margin-right: 15px;
`;

export const DeliveryHeader = styled.View`
  margin: 30px 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #444444;
  font-weight: bold;
`;

export const SelectDelivery = styled.View`
  flex-direction: row;
`;

export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  margin-left: 15px;
`;

export const OptionText = styled.Text`
  font-size: 12px;
  color: ${({ selected }) => (selected ? '#7D40E7' : '#999999')};
  font-weight: bold;

  text-decoration: ${({ selected }) => (selected ? 'underline' : '')};
`;

export const DeliveriesContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#7d40e3',
})``;

export const DeliveryList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
