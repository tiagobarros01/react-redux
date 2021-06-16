import { takeLatest, call, put, all } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';
import * as actions from './actions';

export function* signIn({ payload: { email, password } }: ActionType<typeof actions.signInRequest>) {
  try {
    const { data } = yield call(api.post, '', { email, password });

    yield put(actions.signInSuccess({ token: data.token }));
  } catch (error) {
    yield put(actions.signInFailure());
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
])
