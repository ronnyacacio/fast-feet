import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import api from '~/services/api';
import Select from '~/components/Select';
import { Record, Actions, Content } from './styles';

export default function CreateDelivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [recipients, setRecipients] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState([]);
  const [deliverymans, setDeliverymans] = useState([]);
  const [selectedDeliveryman, setSelectedDeliveryman] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadSelectOptions() {
      try {
        const recipientResponse = await api.get('recipients');
        const deliverymanResponse = await api.get('deliveryman');

        console.log(recipientResponse.data);
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

  const handleChangeRecipient = (selectedOption) => {
    const { value } = selectedOption;

    setSelectedRecipient(value);
  };

  return (
    <Record>
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
        </div>
      </Content>
    </Record>
  );
}
