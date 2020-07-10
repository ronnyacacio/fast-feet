import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

import { WrapperDelivery } from '../../../components';
import {
  Container,
  Card,
  Header,
  IconShipping,
  HeaderTitle,
  Info,
  Title,
  Value,
  IconEvent,
  Date,
  CardButton,
  Button,
  IconHighlight,
  Label,
  Divider,
  IconInfo,
  IconAlarm,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const { delivery } = route.params;

  function formattedDate(date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateConverted = utcToZonedTime(parseISO(date), timezone);

    return format(dateConverted, "d'/'MM'/'yyyy", {
      locale: pt,
    });
  }

  function handleNavigateToInform() {
    if (!delivery.start_date) {
      Alert.alert(
        'Oooops',
        'Primeiro retire o produto para poder cadastrar problemas'
      );
      return;
    }
    if (delivery.end_date) {
      Alert.alert('Oooops', 'O produto já foi entregue ao destinatário!');
      return;
    }
    if (delivery.canceled_at) {
      Alert.alert('Oooops', 'A entregue desse produto já foi cancelada!');
      return;
    }

    navigation.navigate('Inform', { delivery_id: delivery.id });
  }

  return (
    <WrapperDelivery>
      <Container>
        <Card>
          <Header>
            <IconShipping />
            <HeaderTitle>Informações da entrega</HeaderTitle>
          </Header>

          <Info>
            <Title>Destinatário</Title>
            <Value>{delivery.recipient.name}</Value>
          </Info>
          <Info>
            <Title>Endereço de entrega</Title>
            <Value>
              {`Rua ${delivery.recipient.street}, ${delivery.recipient.number}, ${delivery.recipient.city} - ${delivery.recipient.state}, ${delivery.recipient.cep}`}
            </Value>
          </Info>
          <Info>
            <Title>Produto</Title>
            <Value>{delivery.product}</Value>
          </Info>
        </Card>

        <Card>
          <Header>
            <IconEvent />
            <HeaderTitle>Informações da entrega</HeaderTitle>
          </Header>

          <Info>
            <Title>Status</Title>
            <Value>{delivery.status}</Value>
          </Info>

          <Date>
            <Info>
              <Title>Data de retirada</Title>
              <Value>
                {delivery.start_date
                  ? formattedDate(delivery.start_date)
                  : '- - / - - / - -'}
              </Value>
            </Info>
            <Info>
              <Title>Data de entrega</Title>
              <Value>
                {delivery.end_date
                  ? formattedDate(delivery.end_date)
                  : '- - / - - / - -'}
              </Value>
            </Info>
          </Date>
        </Card>

        <CardButton>
          <Button onPress={handleNavigateToInform}>
            <IconHighlight />
            <Label>Informar</Label>
            <Label>Problema</Label>
          </Button>

          <Divider />

          <Button onPress={() => {}}>
            <IconInfo />
            <Label>Vizualizar</Label>
            <Label>Problemas</Label>
          </Button>

          <Divider />

          <Button onPress={() => {}}>
            <IconAlarm />
            <Label>Confirmar</Label>
            <Label>Entrega</Label>
          </Button>
        </CardButton>
      </Container>
    </WrapperDelivery>
  );
}
