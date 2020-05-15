import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';

import api from '~services/api';
import Detail from '../Detail';
import { Container, Actions } from './styles';

export default function Options({ problem }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleDelete() {
    const option = window.confirm('Deseja mesmo cancelar essa encomenda?');

    if (option) {
      try {
        await api.delete(`/problem/${problem._id}/cancel-delivery`);
      } catch (err) {
        toast.warn('Essa encomenda já foi cancelada!');
      }
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
              <MdVisibility size={18} color="#8E5BE8" />
              Visualizar
            </button>
          </div>
          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              Cancelar encomenda
            </button>
          </div>
        </Actions>
      </Container>
      <Detail open={open} handleClose={handleToggleOpen} problem={problem} />
    </>
  );
}
