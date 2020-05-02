import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

import history from '~/services/history';
import {
  Container,
  Actions,
  DeliveryList,
  Scroll,
  DeliveryItem,
  Ball,
} from './styles';

export default function Delivery() {
  function handleCreate() {
    history.push('/delivery/create');
  }

  return (
    <Container>
      <strong>Gerenciando encomendas</strong>
      <Actions>
        <div>
          <FiSearch color="#999" size={18} />
          <input placeholder="Buscar por encomendas" />
        </div>
        <button type="button" onClick={handleCreate}>
          <FiPlus color="#fff" size={30} style={{ paddingRight: 5 }} />
          CADASTRAR
        </button>
      </Actions>

      <DeliveryList>
        <header>
          <strong>ID</strong>
          <strong>Destinatário</strong>
          <strong>Entregador</strong>
          <strong>Cidade</strong>
          <strong>Estado</strong>
          <strong>Status</strong>
          <strong>Ações</strong>
        </header>
        <Scroll>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
          <DeliveryItem>
            <span>#01</span>
            <span>Ludwig van Beethoven</span>
            <div>
              <div>
                <span>JD</span>
              </div>
              <span>John Doe</span>
            </div>
            <span>Rio do Sul</span>
            <span>Santa Catarina</span>
            <aside>
              <Ball />
              <p>ENTREGUE</p>
            </aside>
            <span>...</span>
          </DeliveryItem>
        </Scroll>
      </DeliveryList>
    </Container>
  );
}
