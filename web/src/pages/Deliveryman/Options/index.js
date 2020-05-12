import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import api from '~services/api';
import { Container, Actions } from './styles';

export default function Options({ deliveryman }) {
  const [visible, setVisible] = useState(false);

  async function handleDelete() {
    const option = window.confirm('Deseja mesmo excluir esse entregador?');

    if (option) {
      try {
        await api.delete(`/deliveryman/${deliveryman.id}`);
      } catch (err) {
        toast.warn('O entregador ainda possui entregas cadastradas!');
      }
    }
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
            <Link
              to={{
                pathname: '/deliveryman/update',
                state: { deliveryman },
              }}
            >
              <MdCreate size={18} color="#4D85EE" />
              Editar
            </Link>
          </div>
          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Actions>
      </Container>
    </>
  );
}
