import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiPlus } from 'react-icons/fi';

import { loadRecipientRequest } from '~/store/modules/recipient/actions';
import { Scroll, Loading, Options } from '~/components';
import random from '~/utils/randomNumber';
import { Container, Actions, RecipientItem, RecipientList } from './styles';

export default function Delivery() {
  const [name, setName] = useState('');
  const loading = useSelector((state) => state.delivery.loading);
  const recipients = useSelector((state) => state.recipient.recipients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRecipientRequest(name));
  }, [dispatch, name]);

  return (
    <Container>
      <strong>Gerenciando destinatários</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input
            placeholder="Buscar por nome do destinatário"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Link to="/recipient/create">
          <button type="button">
            <FiPlus color="#fff" size={30} style={{ paddingRight: 5 }} />
            CADASTRAR
          </button>
        </Link>
      </Actions>

      <RecipientList>
        <header>
          <strong>ID</strong>
          <strong>Nome</strong>
          <strong>Endereço</strong>
          <strong>Ações</strong>
        </header>
        {loading ? (
          <Loading size={50} color="#7d40e3" loading={loading} />
        ) : (
          <Scroll>
            {recipients.map((recipient) => (
              <RecipientItem key={recipient.id} initialColors={random()}>
                <span>{`#${recipient.id}`}</span>
                <p>{recipient.name}</p>
                <span>
                  {`Rua ${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}
                </span>
                <Options
                  recipient={recipient}
                  namePage="destinatário"
                  route="recipient"
                />
              </RecipientItem>
            ))}
          </Scroll>
        )}
      </RecipientList>
    </Container>
  );
}
