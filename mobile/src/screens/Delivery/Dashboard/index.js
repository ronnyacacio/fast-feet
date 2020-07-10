import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import api from '../../../services/api';
import useAuth from '../../../hooks/useAuth';
import { DeliveryCard } from '../../../components';
import {
  Container,
  Header,
  Profile,
  Avatar,
  Data,
  Hello,
  Name,
  ButtonIconLogout,
  IconLogout,
  DeliveryHeader,
  Title,
  SelectDelivery,
  Option,
  OptionText,
  DeliveriesContainer,
  Spinner,
  DeliveryList,
} from './styles';

export default function Dashboard() {
  const [selectedPending, setSelectedPending] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(false);

  const { deliveryman, signOut } = useAuth();

  useEffect(() => {
    (async function loadDeliveries() {
      setLoading(true);
      const route = selectedPending
        ? `deliveryman/${deliveryman.id}`
        : `deliveryman/${deliveryman.id}/deliveries`;

      try {
        const response = await api.get(route);

        setDeliveries(response.data);
      } catch (err) {
        Alert.alert('Falha', 'ocorreu um erro inesperado, tente novamente!');
      }
      setLoading(false);
    })();
  }, [selectedPending]);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: deliveryman.avatar
                ? deliveryman.avatar.url
                : `https://api.adorable.io/avatars/50/${deliveryman.name}.png`,
            }}
          />

          <Data>
            <Hello>Bem vindo de volta,</Hello>

            <Name>{deliveryman.name}</Name>
          </Data>
        </Profile>
        <ButtonIconLogout onPress={handleSignOut}>
          <IconLogout />
        </ButtonIconLogout>
      </Header>

      <DeliveryHeader>
        <Title>Entregas</Title>

        <SelectDelivery>
          <Option onPress={() => setSelectedPending(true)}>
            <OptionText selected={selectedPending}>Pendentes</OptionText>
          </Option>
          <Option onPress={() => setSelectedPending(false)}>
            <OptionText selected={!selectedPending}>Entregues</OptionText>
          </Option>
        </SelectDelivery>
      </DeliveryHeader>

      <DeliveriesContainer>
        {loading ? (
          <Spinner />
        ) : (
          <DeliveryList
            data={deliveries}
            keyExtractor={(delivery) => String(delivery.id)}
            renderItem={({ item: delivery }) => (
              <DeliveryCard delivery={delivery} />
            )}
          />
        )}
      </DeliveriesContainer>
    </Container>
  );
}
