import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

import {
  Container,
  Header,
  IconShipping,
  Name,
  DeliveryStatus,
  Status,
  BotOne,
  Dash,
  BotTwo,
  BotThree,
  LabelsContainer,
  WaitWithdrawal,
  Label,
  Info,
  InfoValue,
  Title,
  Value,
  Detail,
  TextDetail,
} from './styles';

export default function DeliveryCard({ delivery }) {
  const navigation = useNavigation();
  const [date, setDate] = useState('');

  const { created_at, start_date, end_date } = delivery;

  useEffect(() => {
    if (end_date) setDate(formattedDate(end_date));
    else if (start_date) setDate(formattedDate(start_date));
    else setDate(formattedDate(created_at));
  }, [created_at, start_date, end_date]);

  function formattedDate(date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateConverted = utcToZonedTime(parseISO(date), timezone);

    return format(dateConverted, "d'/'MM'/'yyyy", {
      locale: pt,
    });
  }

  function handleNavigateToDetail() {
    navigation.navigate('Detail', { delivery });
  }

  return (
    <Container>
      <Header>
        <IconShipping />
        <Name>Encomenda {delivery.id}</Name>
      </Header>

      <DeliveryStatus>
        <Status>
          <BotOne />
          <Dash />
          <BotTwo status={start_date} />
          <Dash />
          <BotThree status={end_date} />
        </Status>

        <LabelsContainer>
          <WaitWithdrawal>
            <Label>Aguardando</Label>
            <Label>retirada</Label>
          </WaitWithdrawal>
          <Label>Retirada</Label>
          <Label>Entregue</Label>
        </LabelsContainer>
      </DeliveryStatus>

      <Info>
        <InfoValue>
          <Title>Data</Title>
          <Value>{date}</Value>
        </InfoValue>
        <InfoValue>
          <Title>Cidade</Title>
          <Value>{delivery.recipient.city}</Value>
        </InfoValue>
        <Detail onPress={handleNavigateToDetail}>
          <TextDetail>Ver detalhes</TextDetail>
        </Detail>
      </Info>
    </Container>
  );
}
