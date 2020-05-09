import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import Select from '~/components/Select';
import Input from '~/components/Input';
import { FormContainer, Actions, Content } from './styles';

export default function CreateDelivery() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState([]);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState([]);

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

  return (
    <FormContainer>
      <header>
        <strong>Cadastro de encomendas</strong>
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
        <div>
          <Select
            name="recipient.name"
            label="Destinatário"
            placeholder="Selecione um destinatário"
            options={recipientsOptions}
            defaultValue={{
              value: selectedRecipient.id,
              label: selectedRecipient.name,
            }}
            onChange={handleChangeRecipient}
          />
          <Select
            name="deliveryman.name"
            label="Entregador"
            placeholder="Selecione um entregador"
            options={deliverymanOptions}
            defaultValue={{
              value: selectedDeliveryman.id,
              label: selectedDeliveryman.name,
            }}
            onChange={handleChangeDeliveryman}
          />
        </div>
        <Input
          name="product"
          label="Nome do produto"
          placeholder="Ex: iPhone"
        />
      </Content>
    </FormContainer>
  );
}
