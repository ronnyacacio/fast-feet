import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import initials from '~/utils/initials';
import Input from '~/components/Input';
import AvatarInput from '~/components/AvatarInput';
import { FormContainer, Actions, Content } from './styles';

export default function UpdateDeliveryman({ location }) {
  const { deliveryman } = location.state;

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      if (!data.avatar_id) data.avatar_id = deliveryman.avatar_id;

      await api.put(`/deliveryman/${deliveryman.id}`, data);
      toast.success('Entregador salvo com sucesso');
      history.push('/deliveryman');
    } catch (err) {
      toast.error('Erro ao salvar o entregador!');
    }
  }

  return (
    <FormContainer
      initialData={deliveryman}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <header>
        <strong>Edição de entregadores</strong>
        <Actions>
          <Link to="/deliveryman">
            <button className="back" type="button">
              <MdKeyboardArrowLeft color="#fff" size={22} />
              VOLTAR
            </button>
          </Link>
          <button className="save" type="submit">
            <MdDone color="#fff" size={22} />
            SALVAR
          </button>
        </Actions>
      </header>
      <Content>
        <AvatarInput name="avatar_id" initials={initials(deliveryman.name)} />

        <Input name="name" label="Nome" placeholder="John Doe" />
        <br />
        <Input name="email" label="Email" placeholder="johndoe@fastfeet.com" />
      </Content>
    </FormContainer>
  );
}
