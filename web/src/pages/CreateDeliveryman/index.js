import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import Input from '~/components/Input';
import AvatarInput from './AvatarInput';
import { FormContainer, Actions, Content } from './styles';

export default function CreateDelivery() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      await api.post('deliveryman', data);
      toast.success('Entregador salvo com sucesso');
      history.push('/deliveryman');
    } catch (err) {
      toast.error('Erro ao salvar o entregador!');
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit} ref={formRef}>
      <header>
        <strong>Cadastro de entregadores</strong>
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
        <AvatarInput name="avatar_id" />

        <Input name="name" label="Nome" placeholder="John Doe" />
        <br />
        <Input name="email" label="Email" placeholder="johndoe@fastfeet.com" />
      </Content>
    </FormContainer>
  );
}
