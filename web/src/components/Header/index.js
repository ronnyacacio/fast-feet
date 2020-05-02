import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '~/store/modules/auth/actions';
import { changePage } from '~/store/modules/pageSelect/actions';
import logo from '~/assets/logo.svg';
import { Container, Content, PageSelect } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.pageSelect.page);

  function handleChangePage(page) {
    dispatch(changePage(page));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <PageSelect
            onClick={() => handleChangePage('DELIVERY')}
            select={currentPage === 'DELIVERY'}
          >
            <Link to="/delivery">ENCOMENDAS</Link>
          </PageSelect>
          <PageSelect
            onClick={() => handleChangePage('DELIVERYMAN')}
            select={currentPage === 'DELIVERYMAN'}
          >
            <Link to="/deliveryman">ENTREGADORES</Link>
          </PageSelect>
          <PageSelect
            onClick={() => handleChangePage('RECIPIENT')}
            select={currentPage === 'RECIPIENT'}
          >
            <Link to="/recipient">DESTINATÁRIOS</Link>
          </PageSelect>
          <PageSelect
            onClick={() => handleChangePage('PROBLEMS')}
            select={currentPage === 'PROBLEMS'}
          >
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
