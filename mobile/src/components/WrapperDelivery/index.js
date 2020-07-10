import React from 'react';

import { Container, HeaderView, CardContainer, Border, Card } from './styles';

export default function WrapperDelivery({ children }) {
  return (
    <Container>
      <HeaderView />

      <CardContainer>
        <Border />
        <Card>{children}</Card>
        <Border />
      </CardContainer>
    </Container>
  );
}
