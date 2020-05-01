import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.push('/delivery');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
