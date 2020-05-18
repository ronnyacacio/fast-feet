import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';
import { Container, Content, PageSelect } from './styles';

export default function Header({ currentPage }) {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PageSelect select={currentPage === 'DELIVERY'}>
            <Link to="/delivery">ENCOMENDAS</Link>
          </PageSelect>
          <PageSelect select={currentPage === 'DELIVERYMAN'}>
            <Link to="/deliveryman">ENTREGADORES</Link>
          </PageSelect>
          <PageSelect select={currentPage === 'RECIPIENT'}>
            <Link to="/recipient">DESTINATÁRIOS</Link>
          </PageSelect>
          <PageSelect select={currentPage === 'PROBLEMS'}>
            <Link to="/problems">PROBLEMAS</Link>
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
