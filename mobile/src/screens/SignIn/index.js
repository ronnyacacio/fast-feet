import React, { useState } from 'react';

import logo from '../../assets/logo.png';
import { Container, Img, Form, Input, Button, TextButton } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  function handleSubmit() {}

  return (
    <Container>
      <Img source={logo} />
      <Form>
        <Input
          keyboardType="numeric"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <Button onPress={handleSubmit}>
          <TextButton>Entrar no sistema</TextButton>
        </Button>
      </Form>
    </Container>
  );
}
