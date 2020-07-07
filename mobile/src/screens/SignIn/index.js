import React, { useState } from 'react';
import { Alert } from 'react-native';

import { useAuth } from '../../contexts/auth';
import logo from '../../assets/logo.png';
import { Container, Img, Form, Input, Button, TextButton } from './styles';

export default function SignIn() {
  const [id, setId] = useState('');

  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn(id);
  }

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
          onSubmitEditing={handleSignIn}
          value={id}
          onChangeText={setId}
        />
        <Button onPress={handleSignIn}>
          <TextButton>Entrar no sistema</TextButton>
        </Button>
      </Form>
    </Container>
  );
}
