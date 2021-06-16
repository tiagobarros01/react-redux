import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import auth from './auth/sagas';

export default function* rootSaga(): Generator<AllEffect<AllEffect<ForkEffect<never>>>, any, unknown> {
  return yield all([auth]);
}
