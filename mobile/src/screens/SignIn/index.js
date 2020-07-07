import React, { useState } from 'react';

import { useAuth } from '../../contexts/auth';
import { Button } from '../../components';
import logo from '../../assets/logo.png';
import { Container, Img, Form, Input } from './styles';

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
        <Button color="#82bf18" onPress={handleSignIn}>
          Entrar no sistema
        </Button>
      </Form>
    </Container>
  );
}
