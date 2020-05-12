import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

import api from '~/services/api';
import Options from './Options';
import initials from '~/utils/initials';
import random from '~/utils/randomNumber';
import {
  Container,
  Actions,
  Scroll,
  DeliverymanItem,
  Picture,
  DeliverymanList,
  Loading,
} from './styles';

export default function Delivery() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [deliverymans, setDeliverymans] = useState([]);

  useEffect(() => {
    async function loadDeliverymans() {
      try {
        setLoading(true);
        const response = await api.get('deliveryman');
        setDeliverymans(response.data);
        setLoading(false);
      } catch (err) {
        toast.error('Falha ao carregadar as entregadores!');
      }
    }
    loadDeliverymans();
  }, [search]);

  return (
    <Container>
      <strong>Gerenciando entregadores</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input
            placeholder="Buscar por nome do entregador"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to="/deliveryman/create">
          <button type="button">
            <FiPlus color="#fff" size={30} style={{ paddingRight: 5 }} />
            CADASTRAR
          </button>
        </Link>
      </Actions>

      <DeliverymanList>
        <header>
          <strong>ID</strong>
          <strong>Foto</strong>
          <strong>Nome</strong>
          <strong>Email</strong>
          <strong>Ações</strong>
        </header>
        {loading ? (
          <Loading size={50} color="#7d40e3" loading={loading} />
        ) : (
          <Scroll>
            {deliverymans.map((deliveryman) => (
              <DeliverymanItem initialColors={random()}>
                <span>{`#${deliveryman.id}`}</span>
                <Picture>
                  {deliveryman.avatar ? (
                    <img src={deliveryman.avatar.url} alt={deliveryman.name} />
                  ) : (
                    <div>
                      <span>{initials(deliveryman.name)}</span>
                    </div>
                  )}
                </Picture>
                <p className="name">{deliveryman.name}</p>
                <span>{deliveryman.email}</span>
                <Options deliveryman={deliveryman} />
              </DeliverymanItem>
            ))}
          </Scroll>
        )}
      </DeliverymanList>
    </Container>
  );
}
