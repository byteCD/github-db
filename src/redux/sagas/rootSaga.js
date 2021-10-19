import { all } from "redux-saga/effects";
import { repositorySagaWatcher } from "./repositorySaga";
import { userSagaWatcher } from "./userSaga";

function* rootSaga() {
  yield all([userSagaWatcher(), repositorySagaWatcher()]);
}

export default rootSaga;
