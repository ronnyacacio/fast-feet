import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../screens/Delivery/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export default function DeliveryRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTransparent: true,
        headerTintColor: '#fff',
        headerLeftContainerStyle: { marginLeft: 20 },
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: '',
        }}
      />
    </Navigator>
  );
}
