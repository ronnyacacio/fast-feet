import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { loadDeliverySuccess, destroyDeliveryFailure } from './actions';

export function* load({ payload }) {
  try {
    const { product } = payload;
    const route = product ? `/deliveries?product=${product}` : '/deliveries';

    const response = yield call(api.get, route);
    yield put(loadDeliverySuccess(response.data));
  } catch (err) {
    toast.error('Falha ao carregar as encomendas!');
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`);
    const response = yield call(api.get, 'deliveries');

    yield put(loadDeliverySuccess(response.data));
  } catch (err) {
    toast.error(
      'Essa encomenda não pode ser excluida pois já está a caminho do seu destino!'
    );
    yield put(destroyDeliveryFailure());
  }
}

export default all([
  takeLatest('@delivery/LOAD_REQUEST', load),
  takeLatest('@delivery/DESTROY_REQUEST', destroy),
]);
