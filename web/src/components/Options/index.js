import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever,
} from 'react-icons/md';

import { destroyDeliveryRequest } from '~/store/modules/delivery/actions';
import { destroyDeliverymanRequest } from '~/store/modules/deliveryman/actions';
import { destroyRecipientRequest } from '~/store/modules/recipient/actions';
import { cancelDeliveryRequest } from '~/store/modules/problem/actions';
import Detail from '~/components/Detail';
import { Container, Actions } from './styles';

export default function Options({
  namePage,
  route,
  delivery,
  deliveryman,
  recipient,
  problem,
}) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    function getState() {
      if (delivery) return delivery;
      if (deliveryman) return deliveryman;
      if (recipient) return recipient;
      return {};
    }

    setState(getState());
  }, [delivery, deliveryman, recipient]);

  async function handleDelete() {
    const option = window.confirm(
      `Deseja mesmo ${problem ? 'cancelar' : 'excluir'} ${
        problem || delivery ? 'essa' : 'esse'
      } ${namePage}?`
    );

    if (option) {
      if (delivery) dispatch(destroyDeliveryRequest(delivery.id));
      else if (deliveryman) dispatch(destroyDeliverymanRequest(deliveryman.id));
      else if (recipient) dispatch(destroyRecipientRequest(recipient.id));
      else dispatch(cancelDeliveryRequest(problem._id));
    }
  }

  function handleToggleOpen() {
    setOpen(!open);
  }

  function handleToggleVisible() {
    setVisible(!visible);
  }

  console.log(open);

  return (
    <>
      <Container>
        <button onClick={handleToggleVisible} type="button">
          <MdMoreHoriz size={22} color="#c6c6c6" />
        </button>

        <Actions visible={visible}>
          {delivery || problem ? (
            <div>
              <button type="button" onClick={handleToggleOpen}>
                <MdVisibility size={18} color="#8E5BE8" />
                Visualizar
              </button>
            </div>
          ) : (
            <></>
          )}
          {problem ? (
            <></>
          ) : (
            <div>
              <Link
                to={{
                  pathname: `/${route}/update`,
                  state: { state },
                }}
              >
                <MdCreate size={18} color="#4D85EE" />
                Editar
              </Link>
            </div>
          )}
          <div>
            <button type="button" onClick={handleDelete}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              {problem ? 'Cancelar' : 'Excluir'}
            </button>
          </div>
        </Actions>
      </Container>
      {delivery || problem ? (
        <Detail
          open={open}
          handleClose={handleToggleOpen}
          delivery={delivery}
          problem={problem}
        />
      ) : (
        <></>
      )}
    </>
  );
}
