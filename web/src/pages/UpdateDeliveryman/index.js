import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import { Header, Input, AvatarInput } from '~/components';
import history from '~/services/history';
import initials from '~/utils/initials';
import { FormContainer, Actions, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  email: Yup.string().email('Informe um email válido').required('Obrigatório'),
  avatar_id: Yup.number(),
});

export default function UpdateDeliveryman({ location }) {
  const deliveryman = location.state.state;

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
    <>
      <Header currentPage="DELIVERYMAN" />
      <FormContainer
        schema={schema}
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
          <Input
            name="email"
            label="Email"
            placeholder="johndoe@fastfeet.com"
          />
        </Content>
      </FormContainer>
    </>
  );
}

UpdateDeliveryman.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      state: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar_id: PropTypes.number,
        avatar: PropTypes.shape({
          id: PropTypes.number,
          url: PropTypes.string,
          path: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
