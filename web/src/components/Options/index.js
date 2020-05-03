import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import Detail from '~/components/Detail';
import { Container, Actions } from './styles';

export default function Options({ delivery }) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

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
            <Link to="/delivery/update">
              <MdCreate size={18} color="#4D85EE" />
              Editar
            </Link>
          </div>
          <div>
            <button type="button">
              <MdDeleteForever size={18} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Actions>
      </Container>
      <Detail open={open} handleClose={handleToggleOpen} delivery={delivery} />
    </>
  );
}
