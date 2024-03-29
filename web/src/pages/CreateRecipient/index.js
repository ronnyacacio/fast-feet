import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { Header, Input } from '~/components';
import { FormContainer, Actions, Content } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Obrigatório'),
  street: Yup.string().required('Obrigatório'),
  number: Yup.string().required('Obrigatório'),
  complement: Yup.string(),
  city: Yup.string().required('Obrigatório'),
  state: Yup.string().required('Obrigatório'),
  cep: Yup.string()
    .required('Obrigatório')
    .min(9, 'Digite um cep válido')
    .max(9, 'Digite um cep válido'),
});

export default function CreateRecipient() {
  async function handleSubmit(data) {
    data.number = Number(data.number);
    try {
      await api.post('recipients', data);
      toast.success('Destinatário cadastrado com sucesso!');
      history.push('/recipient');
    } catch (err) {
      toast.error('O campo número precisa ser um número válido!');
    }
  }

  return (
    <>
      <Header currentPage="RECIPIENT" />
      <FormContainer schema={schema} onSubmit={handleSubmit}>
        <header>
          <strong>Cadastro de destinatários</strong>
          <Actions>
            <Link to="/recipient">
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
          <Input name="name" label="Nome" placeholder="Nome do destinatário" />
          <div className="medium">
            <Input
              name="street"
              label="Rua"
              placeholder="Nome do destinatário"
            />
            <div>
              <Input name="number" label="Número" />
              <Input name="complement" label="Complemento" />
            </div>
          </div>
          <div className="down">
            <Input
              name="city"
              label="Cidade"
              placeholder="Cidade do destinatário"
            />
            <Input
              name="state"
              label="Estado"
              placeholder="Estado do destinatário"
            />
            <InputMask mask="99999-999">
              {() => <Input name="cep" label="Cep" />}
            </InputMask>
          </div>
        </Content>
      </FormContainer>
    </>
  );
}
