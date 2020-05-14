import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Options from './Options';
import random from '~/utils/randomNumber';
import {
  Container,
  Actions,
  Scroll,
  RecipientItem,
  RecipientList,
  Loading,
} from './styles';

export default function Delivery() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      try {
        setLoading(true);
        const response = await api.get('recipients');
        setRecipients(response.data);
        setLoading(false);
      } catch (err) {
        toast.error('Falha ao carregar destinatários!');
      }
    }
    loadRecipients();
  }, [search]);

  return (
    <Container>
      <strong>Gerenciando destinatários</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input
            placeholder="Buscar por nome do destinatário"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
              <RecipientItem initialColors={random()}>
                <span>{`#${recipient.id}`}</span>
                <p>{recipient.name}</p>
                <span>
                  {`Rua ${recipient.street}, ${recipient.number}, ${recipient.city} - ${recipient.state}`}
                </span>
                <Options recipient={recipient} />
              </RecipientItem>
            ))}
          </Scroll>
        )}
      </RecipientList>
    </Container>
  );
}
