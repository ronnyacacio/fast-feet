import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { destroyDeliverySuccess } from './actions';

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `deliveries/${id}`);
    const response = yield call(api.get, 'deliveries');

    yield put(destroyDeliverySuccess(response.data));
  } catch (err) {
    toast.error('Falha na exclusão da encomenda!');
  }
}

export default all([takeLatest('@delivery/DESTROY_REQUEST', destroy)]);
