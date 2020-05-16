import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { AvatarInput, Input } from '~/components';
import { FormContainer, Actions, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  email: Yup.string().required('Obrigatório'),
  avatar_id: Yup.number(),
});

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
    <FormContainer schema={schema} onSubmit={handleSubmit} ref={formRef}>
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

        <Input name="name" label="Nome" placeholder="Nome do entregador" />
        <br />
        <Input name="email" label="Email" placeholder="Email do entregador" />
      </Content>
    </FormContainer>
  );
}
