import React from 'react';

import { Container, Spinner } from './styles';

export default function Loading() {
  return (
    <Container>
      <Spinner size="large" color="#fff" />
    </Container>
  );
}
