import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdMoreHoriz, MdVisibility, MdDeleteForever } from 'react-icons/md';

import { cancelDeliveryRequest } from '~/store/modules/problem/actions';
import Detail from '../Detail';
import { Container, Actions } from './styles';

export default function Options({ problem }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  async function handleDelete() {
    // eslint-disable-next-line no-alert
    const option = window.confirm('Deseja mesmo cancelar essa encomenda?');

    if (option) {
      dispatch(cancelDeliveryRequest(problem._id));
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
