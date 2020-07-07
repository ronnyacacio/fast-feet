import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import DeliveryRoutes from './delivery.routes';
import Profile from '../screens/Profile';

const { Navigator, Screen } = createBottomTabNavigator();

const icons = {
  Delivery: 'menu',
  Profile: 'person-outline',
};

export default function AppRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        style: {
          borderTopColor: '#00000026',
          height: '10%',
        },
        iconStyle: {
          margin: 0,
          marginTop: 15,
        },
        labelStyle: {
          fontSize: 14,
          marginBottom: 15,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const name = icons[route.name];
          return <Icon name={name} size={25} color={color} />;
        },
      })}
    >
      <Screen
        name="Delivery"
        children={DeliveryRoutes}
        options={{
          title: 'Entregas',
          unmountOnBlur: true,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Meu perfil',
        }}
      />
    </Navigator>
  );
}
