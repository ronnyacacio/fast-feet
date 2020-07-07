import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import SignIn from '../screens/SignIn';
import AppRoutes from './app.routes';

export default function Routes() {
  const signed = false;

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
