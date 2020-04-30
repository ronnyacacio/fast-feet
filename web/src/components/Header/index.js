import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content, PageSelect } from './styles';

export default function Header() {
  function handleSignOut() {}

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PageSelect select>
            <Link to="/delivery">ENCOMENDAS</Link>
          </PageSelect>
          <PageSelect>
            <Link to="/delivery">ENTREGADORES</Link>
          </PageSelect>
          <PageSelect>
            <Link to="/delivery">DESTINATÁRIOS</Link>
          </PageSelect>
          <PageSelect>
            <Link to="/delivery">PROBLEMAS</Link>
          </PageSelect>
        </nav>
        <aside>
          <span>Admin FastFeet</span>
          <button type="button" onClick={handleSignOut}>
            sair do sistema
          </button>
        </aside>
      </Content>
    </Container>
  );
}
