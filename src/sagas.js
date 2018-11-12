import { delay } from "redux-saga";
import { put, takeEvery, all } from "redux-saga/effects";

export function* helloSaga() {
  yield delay(1000);
  yield put({ type: "henlo_Async" });
}

export function* watchhelloSaga() {
  yield takeEvery("AsyncHenlo", helloSaga);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchhelloSaga()]);
}
