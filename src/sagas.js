import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { JobsAdd } from "./actions";
import api from "./api";

//watcher saga
export function* watchGetAllJobs() {
  yield takeEvery("Get_Multiple_Jobs", getAllJobs);
}

//worker
export function* getAllJobs() {
  const jobs = yield call(api.getAllJobs);
  yield put(JobsAdd([]));
}
