import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';
import SignIn from '../screens/SignIn';
import AppRoutes from './app.routes';

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#7D40E7',
        }}
      >
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );

  return (
    <>
      {signed ? (
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      ) : (
        <SignIn />
      )}
    </>
  );
}
