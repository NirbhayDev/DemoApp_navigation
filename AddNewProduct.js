
import { put, takeLatest, call } from 'redux-saga/effects';
import type { Saga } from 'redux-saga';
import ApiCaller from '../ApiCaller';


const callAPI = payload => {
  return ApiCaller('/api/admin/NewProduct/', 'post', payload.body, payload.HEADER).then(response => response);
}

export default function* CategoryAdd(): Saga {
  yield takeLatest('NewProduct_ADD', function* performAction(action) {
    yield put({ type: 'NewProduct_ADD_INITIATED' });
    try {
      const data = yield call(callAPI.bind(this, action.payload));
      console.log(data);
      yield put({ type: 'NewProduct_ADD_SUCCESS', payload: data });
    } catch (error) {
      yield put({ type: 'NewProduct_ADD_FAILED', payload: error });
    }
  });
}
