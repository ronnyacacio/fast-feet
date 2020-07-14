import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../../services/api';
import useAuth from '../../../hooks/useAuth';
import { WrapperDelivery } from '../../../components';
import { Container, Content, Info, Title, Value, Button } from './styles';

export default function Withdraw() {
  const navigation = useNavigation();
  const route = useRoute();
  const { delivery } = route.params;

  const { deliveryman } = useAuth();

  async function handleWithdraw() {
    try {
      await api.put(`deliveryman/${deliveryman.id}/delivery/${delivery.id}`, {
        start_date: new Date(),
      });
      Alert.alert('Sucesso', 'A encomenda foi retirada!');
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert(
        'Falha',
        'O limite de retiradas diárias foi atingido ou está fora da hora de expediente!'
      );
    }
  }

  return (
    <WrapperDelivery>
      <Container>
        <Content>
          <Info>
            <Title>Destinatário</Title>
            <Value>{delivery.recipient.name}</Value>
          </Info>

          <Info>
            <Title>Produto</Title>
            <Value>{delivery.product}</Value>
          </Info>

          <Info>
            <Title>Observação</Title>
            <Value>Você só pode retirar 5 encomendas por dia.</Value>
          </Info>

          <Info>
            <Title>Observação</Title>
            <Value>
              Você só pode retirar as encomendas em horário comercial -{' '}
              {`(08:00h às 17:00h)`}
            </Value>
          </Info>
        </Content>

        <Button color="#7d40e3" onPress={handleWithdraw}>
          Retirar
        </Button>
      </Container>
    </WrapperDelivery>
  );
}
