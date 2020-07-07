import React from 'react';
import { Text, StatusBar } from 'react-native';

import { AuthProvider } from './contexts/auth';
import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}
