import { takeEvery, call, put } from "redux-saga/effects";
import userService from "../../services/UserService";
import {
  GET_USER,
  GET_USERS,
  setUserLoaded,
  setUsersLoaded,
  setUser,
  setUsers,
  setUsersError,
  setUserError,
} from "../actions/userActions";

function* getUsersWorker(action) {
  try {
    yield put(setUsersLoaded(false));

    const users = yield call(
      userService.getUsers,
      action.payload.username,
      action.payload.page
    );

    if (!users.total_count) {
      yield put(setUsersError("Пользователь не найден"));
      yield put(setUsersLoaded(true));
      return;
    }

    yield put(setUsersError(""));
    yield put(setUsers(users.items, users.total_count));
    yield put(setUsersLoaded(true));
  } catch (error) {
    yield put(setUsersError(error.response.data.message));
    yield put(setUsersLoaded(true));
  }
}

function* getUserWorker(action) {
  try {
    yield put(setUserLoaded(false));
    yield put(setUserError(""));

    const user = yield call(userService.getUser, action.payload);

    yield put(setUser(user));
    yield put(setUserLoaded(true));
  } catch (error) {
    yield put(setUserError(error.response.data.message));
    yield put(setUserLoaded(true));
  }
}

export function* userSagaWatcher() {
  yield takeEvery(GET_USERS, getUsersWorker);
  yield takeEvery(GET_USER, getUserWorker);
}
