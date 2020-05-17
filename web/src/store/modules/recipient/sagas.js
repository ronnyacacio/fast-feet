import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { destroyRecipientFailure, loadRecipientSuccess } from './actions';

export function* load({ payload }) {
  try {
    const { name } = payload;
    const route = name ? `/recipients?name=${name}` : '/recipients';

    const response = yield call(api.get, route);
    yield put(loadRecipientSuccess(response.data));
  } catch (err) {
    toast.error('Falha ao carregar destinatários!');
  }
}

export function* destroy({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `recipients/${id}`);
    const response = yield call(api.get, 'recipients');

    yield put(loadRecipientSuccess(response.data));
  } catch (err) {
    toast.error('O destinatário ainda possui entregas cadastradas!');
    yield put(destroyRecipientFailure());
  }
}

export default all([
  takeLatest('@recipient/LOAD_REQUEST', load),
  takeLatest('@recipient/DESTROY_REQUEST', destroy),
]);
