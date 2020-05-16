import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch, FiPlus } from 'react-icons/fi';

import { loadDeliverymanRequest } from '~/store/modules/deliveryman/actions';
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

export default function Deliveryman() {
  const [name, setName] = useState('');
  const loading = useSelector((state) => state.deliveryman.loading);
  const deliverymans = useSelector((state) => state.deliveryman.deliverymans);

  console.log(deliverymans);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadDeliverymanRequest(name));
  }, [dispatch, name]);

  return (
    <Container>
      <strong>Gerenciando entregadores</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input
            placeholder="Buscar por nome do entregador"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              <DeliverymanItem>
                <span>{`#${deliveryman.id}`}</span>
                <Picture initialColors={random()}>
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
