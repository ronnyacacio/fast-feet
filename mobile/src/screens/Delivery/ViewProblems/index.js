import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { utcToZonedTime } from 'date-fns-tz';

import api from '../../../services/api';
import { WrapperDelivery } from '../../../components';
import {
  Container,
  Card,
  DescriptionContainer,
  Description,
  Date,
} from './styles';

export default function ViewProblems() {
  const [problems, setProblems] = useState([]);

  const navigation = useNavigation();
  const route = useRoute();

  const { delivery_id } = route.params;

  useEffect(() => {
    (async function loadProblems() {
      try {
        const response = await api.get(`/deliveries/${delivery_id}/problems`);

        setProblems(response.data);
      } catch (err) {
        Alert.alert('Falha', 'Ocorreu um erro inesperado, tente novamente!');
      }
    })();
  }, []);

  function formattedDate(date) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateConverted = utcToZonedTime(parseISO(date), timezone);

    return format(dateConverted, "d'/'MM'/'yyyy", {
      locale: pt,
    });
  }

  return (
    <WrapperDelivery>
      <Container>
        {problems.map((problem) => (
          <Card key={String(problem._id)}>
            <DescriptionContainer>
              <Description>{problem.description}</Description>
            </DescriptionContainer>
            <Date>{formattedDate(problem.createdAt)}</Date>
          </Card>
        ))}
      </Container>
    </WrapperDelivery>
  );
}
