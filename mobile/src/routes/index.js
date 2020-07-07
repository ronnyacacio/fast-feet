import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { useAuth } from '../contexts/auth';
import Loading from '../screens/Loading';
import SignIn from '../screens/SignIn';
import AppRoutes from './app.routes';

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading) return <Loading />;

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
