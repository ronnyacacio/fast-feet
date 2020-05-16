import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { loadDeliverymanSuccess } from './actions';

export function* load({ payload }) {
  try {
    const { name } = payload;
    const route = name ? `/deliveryman?name=${name}` : '/deliveryman';

    const response = yield call(api.get, route);

    yield put(loadDeliverymanSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao carregar entregadores!');
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveryman/${id}`);
    const response = yield call(api.get, 'deliveryman');

    yield put(loadDeliverymanSuccess(response.data));
  } catch (err) {
    toast.error('Falha na exclusão do entregador!');
  }
}

export default all([
  takeLatest('@deliveryman/LOAD_REQUEST', load),
  takeLatest('@deliveryman/DESTROY_REQUEST', destroy),
]);
