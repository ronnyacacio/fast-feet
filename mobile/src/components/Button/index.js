import React from 'react';

import { Container, TextButton } from './styles';

export default function Button({ color, children, ...rest }) {
  return (
    <Container color={color} {...rest}>
      <TextButton>{children}</TextButton>
    </Container>
  );
}
