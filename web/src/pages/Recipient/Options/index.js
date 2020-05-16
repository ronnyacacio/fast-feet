import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md';

import { destroyRecipientRequest } from '~/store/modules/recipient/actions';
import { Container, Actions } from './styles';

export default function Options({ recipient }) {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  async function handleDelete() {
    const option = window.confirm('Deseja mesmo excluir esse destinatário?');

    if (option) {
      dispatch(destroyRecipientRequest(recipient.id));
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
                pathname: '/recipient/update',
                state: { recipient },
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
