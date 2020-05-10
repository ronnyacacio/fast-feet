import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { destroyDeliveryRequest } from '~/store/modules/delivery/actions';
import Detail from '~/components/Detail';
import { Container, Actions } from './styles';

export default function Options({ delivery }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  async function handleDelete() {
    const option = window.confirm('Deseja mesmo excluir essa encomenda?');

    if (option) {
      dispatch(destroyDeliveryRequest(delivery.id));
    }
  }

  function handleToggleOpen() {
    setOpen(!open);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <>
      <Container>
        <button onClick={handleToggleVisible} type="button">
          <MdMoreHoriz size={22} color="#c6c6c6" />
        </button>

        <Actions visible={visible}>
          <div>
            <button type="button" onClick={handleToggleOpen}>
              <MdVisibility size={10} color="#8E5BE8" />
              Visualizar
            </button>
          </div>
          <div>
            <Link
              to={{
                pathname: '/delivery/update',
                state: { delivery },
              }}
            >
              <MdCreate size={10} color="#4D85EE" />
              Editar
            </Link>
          </div>
          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever size={10} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Actions>
      </Container>
      <Detail open={open} handleClose={handleToggleOpen} delivery={delivery} />
    </>
  );
}
