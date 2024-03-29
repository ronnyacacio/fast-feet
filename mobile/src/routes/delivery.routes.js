import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons as Icon } from '@expo/vector-icons';

import Dashboard from '../screens/Delivery/Dashboard';
import Detail from '../screens/Delivery/Detail';
import Withdraw from '../screens/Delivery/Withdraw';
import Inform from '../screens/Delivery/Inform';
import ViewProblems from '../screens/Delivery/ViewProblems';
import Confirm from '../screens/Delivery/Confirm';

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

      <Screen
        name="Detail"
        component={Detail}
        options={({ navigation }) => ({
          title: 'Detalhes da encomenda',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="Withdraw"
        component={Withdraw}
        options={({ navigation }) => ({
          title: 'Retirar encomenda',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="Inform"
        component={Inform}
        options={({ navigation }) => ({
          title: 'Informar Problema',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="ViewProblems"
        component={ViewProblems}
        options={({ navigation }) => ({
          title: 'Vizualizar Problemas',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />

      <Screen
        name="Confirm"
        component={Confirm}
        options={({ navigation }) => ({
          title: 'Confirmar entrega',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={25} color="#fff" />
            </TouchableOpacity>
          ),
        })}
      />
    </Navigator>
  );
}
