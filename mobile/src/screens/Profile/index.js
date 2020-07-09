import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useMemo } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

import useAuth from '../../hooks/useAuth';
import { Button } from '../../components';
import { Container, Img, Info, Title, Description } from './styles';

export default function Profile() {
  const {
    deliveryman,
    signOut,
    deliveryman: { created_at: date },
  } = useAuth();

  const dateFormatted = useMemo(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateConverted = utcToZonedTime(parseISO(date), timezone);

    return format(dateConverted, "d'/'MM'/'yyyy", {
      locale: pt,
    });
  }, [date]);

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Img
        source={{
          uri: deliveryman.avatar
            ? deliveryman.avatar.url
            : `https://api.adorable.io/avatars/50/${deliveryman.name}.png`,
        }}
      />

      <Info>
        <Title>Nome completo</Title>
        <Description>{deliveryman.name}</Description>

        <Title>Email</Title>
        <Description>{deliveryman.email}</Description>

        <Title>Data de cadastro</Title>
        <Description>{dateFormatted}</Description>
      </Info>

      <Button color="#e74040" onPress={handleSignOut}>
        Logout
      </Button>
    </Container>
  );
}
