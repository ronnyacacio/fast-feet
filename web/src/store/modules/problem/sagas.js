import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { loadDeliveryRequest } from '../delivery/actions';
import { loadProblemSuccess } from './actions';

export function* load() {
  try {
    const { data } = yield call(api.get, 'deliveries/problems');

    const problems = [];

    for (let i = 0; i < data.length; i += 1) {
      const response = yield call(api.get, `deliveries/${data[i].id}/problems`);
      problems.push(response.data);
    }

    yield put(loadProblemSuccess(...problems));
  } catch (err) {
    toast.error('Falha ao carregar problemas!');
  }
}

export function* cancelDelivery({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `/problem/${id}/cancel-delivery`);
    yield put(loadDeliveryRequest());
  } catch (err) {
    toast.warn('Essa encomenda já foi cancelada!');
  }
}

export default all([
  takeLatest('@problem/LOAD_REQUEST', load),
  takeLatest('@problem/CANCEL_DELIVERY_REQUEST', cancelDelivery),
]);
