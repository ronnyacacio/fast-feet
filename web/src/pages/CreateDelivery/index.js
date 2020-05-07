import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AsyncSelect from 'react-select/async';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';

import { Record, Actions, Content } from './styles';

const options = ['Ronny', 'Renato', 'Renan', 'Rodrigo'];

const filterColors = (inputValue) => {
  return options.filter((i) =>
    i.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default function CreateDelivery() {
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
          <AsyncSelect
            cacheOptions
            defaultOptions
            placeholder="Destinatário"
            loadOptions={promiseOptions}
          />
        </div>
      </Content>
    </Record>
  );
}
