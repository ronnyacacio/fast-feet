import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';
import { FormContainer, Actions, Content, Select, Input } from './styles';

const schema = Yup.object().shape({
  product: Yup.string().required('O produto da entrega é obrigatório'),
  deliveryman_id: Yup.number().required('Selecione um entregador'),
  recipient_id: Yup.number().required('Selecione um entregador'),
});

export default function CreateDelivery({ location }) {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState(
    location.state.delivery.recipient
  );
  const [selectedDeliveryman, setSelectedDeliveryman] = useState(
    location.state.delivery.deliveryman
  );

  useEffect(() => {
    async function loadSelectOptions() {
      try {
        const recipientResponse = await api.get('recipients');
        const deliverymanResponse = await api.get('deliveryman');
        setRecipients(recipientResponse.data);
        setDeliverymans(deliverymanResponse.data);
      } catch (err) {
        toast.error('Falha ao carregar dados');
      }
    }

    loadSelectOptions();
  }, []);

  const recipientsOptions = recipients.map((recipient) => {
    const data = {
      value: recipient,
      label: recipient.name,
    };

    return data;
  });

  const deliverymanOptions = deliverymans.map((deliveryman) => {
    const data = {
      value: deliveryman,
      label: deliveryman.name,
    };

    return data;
  });

  const handleChangeRecipient = (selectedOption) => {
    const { value } = selectedOption;

    setSelectedRecipient(value);
  };

  const handleChangeDeliveryman = (selectedOption) => {
    const { value } = selectedOption;

    setSelectedDeliveryman(value);
  };

  async function handleSubmit({ product }) {
    try {
      const { id } = location.state.delivery;
      const deliveryman_id = selectedDeliveryman.id;
      const recipient_id = selectedRecipient.id;

      const body = { product, deliveryman_id, recipient_id };

      if (!(await schema.isValid(body))) {
        toast.error('Algo deu errado ao salvar a encomenda');
        return;
      }

      await api.put(`/deliveries/${id}`, body);

      toast.success('Encomenda salva com sucesso');
      history.push('/delivery');
    } catch (err) {
      toast.error('Algo deu errado ao salvar a encomenda');
    }
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
      initialData={location.state.delivery}
    >
      <header>
        <strong>Edição de encomendas</strong>
        <Actions>
          <Link to="/delivery">
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
        <aside>
          <Select
            name="recipient_id"
            label="Destinatário"
            placeholder="Selecione um destinatário"
            options={recipientsOptions}
            defaultValue={{
              value: location.state.delivery.recipient.id,
              label: location.state.delivery.recipient.name,
            }}
            onChange={handleChangeRecipient}
          />
          <Select
            name="deliveryman_id"
            label="Entregador"
            placeholder="Selecione um entregador"
            options={deliverymanOptions}
            defaultValue={{
              value: location.state.delivery.deliveryman.id,
              label: location.state.delivery.deliveryman.name,
            }}
            onChange={handleChangeDeliveryman}
          />
        </aside>
        <Input
          name="product"
          label="Nome do produto"
          placeholder="Ex: iPhone"
        />
      </Content>
    </FormContainer>
  );
}
