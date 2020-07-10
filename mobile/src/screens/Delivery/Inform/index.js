import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../../services/api';
import { WrapperDelivery } from '../../../components';
import { Container, Input, Button } from './styles';
import { Alert } from 'react-native';

export default function Inform() {
  const [problem, setProblem] = useState('');

  const navigation = useNavigation();
  const route = useRoute();
  const { delivery_id } = route.params;

  async function handleInformProblem() {
    if (!problem) {
      Alert.alert('Oooops', 'Informe um problema!');
      return;
    }

    try {
      await api.post(`delivery/${delivery_id}/problems`, {
        description: problem,
      });
      Alert.alert('Sucesso', 'O problema foi cadastrado!');
      navigation.goBack();
    } catch (err) {
      Alert.alert('Falha', 'Ocorreu um erro inesperado, tente novamente!');
    }
  }

  return (
    <WrapperDelivery>
      <Container>
        <Input
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          placeholderTextColor="#999999"
          multiline
          value={problem}
          onChangeText={setProblem}
        />
        <Button color="#7d40e3" onPress={handleInformProblem}>
          Entrar
        </Button>
      </Container>
    </WrapperDelivery>
  );
}
