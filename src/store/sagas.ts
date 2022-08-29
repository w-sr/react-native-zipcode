import axios, { AxiosResponse } from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { BASE_URL } from '../config';

import * as actions from './actions';
import * as slicesActions from './slices';
import { AddressType } from './types';

function* getAddressApi(action: ReturnType<typeof actions.getZipcodeApi>) {
  yield put(slicesActions.setIsLoading(true));

  const {
    payload: { code },
  } = action;

  try {
    const { data }: AxiosResponse<AddressType> = yield axios.get(
      `${BASE_URL}${code}`,
    );

    yield put(slicesActions.setZipcode(data));
  } catch (err) {
    yield put(slicesActions.setZipcode({} as AddressType));
  }

  yield put(slicesActions.setIsLoading(false));
}

export function* watchCommonSaga() {
  yield takeLatest(actions.getZipcodeApi.type, getAddressApi);
}
