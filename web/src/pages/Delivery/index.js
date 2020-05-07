import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { GiPlainCircle } from 'react-icons/gi';

import api from '~/services/api';
import Options from './Options';
import initials from '~/utils/initials';
import random from '~/utils/randomNumber';
import { setColor } from '~/utils/selectColor';
import {
  Container,
  Actions,
  DeliveryList,
  Scroll,
  DeliveryItem,
  Deliveryman,
} from './styles';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [product, setProduct] = useState('');
  // const loading = useSelector((state) => state.delivery.loading);
  const stateDeliveries = useSelector((state) => state.delivery.deliveries);

  useEffect(() => {
    setDeliveries(stateDeliveries);
  }, [stateDeliveries]);

  useEffect(() => {
    async function loadDeliveries() {
      const route = product ? `/deliveries?product=${product}` : '/deliveries';

      const response = await api.get(route);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [product]);

  return (
    <Container>
      <strong>Gerenciando encomendas</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input
            placeholder="Buscar por nome do produto"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>
        <Link to="/delivery/create">
          <button type="button">
            <FiPlus color="#fff" size={30} style={{ paddingRight: 5 }} />
            CADASTRAR
          </button>
        </Link>
      </Actions>

      <DeliveryList>
        <header>
          <strong>ID</strong>
          <strong>Produto</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </header>
        <Scroll>
          {deliveries.map((delivery) => (
            <DeliveryItem status={delivery.status}>
              <span>{`#${delivery.id}`}</span>
              <span>{delivery.product}</span>
              <span>{delivery.recipient.name}</span>
              <Deliveryman className="initials" initialColors={random()}>
                {delivery.deliveryman.avatar ? (
                  <img
                    src={delivery.deliveryman.avatar.url}
                    alt={delivery.deliveryman.name}
                  />
                ) : (
                  <div>
                    <span>{initials(delivery.deliveryman.name)}</span>
                  </div>
                )}
                <span>{delivery.deliveryman.name}</span>
              </Deliveryman>
              <span>{delivery.recipient.city}</span>
              <span>{delivery.recipient.state}</span>
              <aside>
                <GiPlainCircle color={setColor(delivery.status)} size={10} />
                <p>{delivery.status}</p>
              </aside>
              <Options delivery={delivery} />
            </DeliveryItem>
          ))}
        </Scroll>
      </DeliveryList>
    </Container>
  );
}
