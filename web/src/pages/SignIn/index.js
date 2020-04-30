import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

export default function SignIn() {
  function handleSubmit() {
    alert('Entrou!');
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form onSubmit={handleSubmit}>
        <span>SEU E-MAIL</span>
        <Input name="email" type="email" placeholder="exemplo@email.com" />
        <span>SUA SENHA</span>
        <Input name="password" type="password" placeholder="*************" />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
