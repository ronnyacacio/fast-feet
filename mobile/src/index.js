import React from 'react';
import { Text, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text>Hello World</Text>
    </>
  );
}
