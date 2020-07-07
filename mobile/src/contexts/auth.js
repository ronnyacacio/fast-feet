import React, { useState, useEffect, useContext, createContext } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [deliveryman, setDeliveryman] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function loadStorageData() {
      const storagedDeliveryman = await AsyncStorage.getItem(
        '@FastFeet:deliveryman'
      );

      if (storagedDeliveryman) {
        setDeliveryman(JSON.parse(storagedDeliveryman));
      }
      setLoading(false);
    })();
  }, []);

  async function signIn(id) {
    try {
      const response = await api.get(`/sessions/deliveryman/${id}`);

      setDeliveryman(response.data);

      await AsyncStorage.setItem(
        '@FastFeet:deliveryman',
        JSON.stringify(response.data)
      );
    } catch (err) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seu ID'
      );
    }
  }

  function signOut() {
    AsyncStorage.clear().then(() => setDeliveryman(null));
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!deliveryman, loading, deliveryman, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
