import { takeEvery, call, put } from "redux-saga/effects";
import repositoryService from "../../services/RepositoryService";
import {
  GET_REPOSITORIES,
  GET_REPOSITORY,
  setRepositories,
  setRepositoriesLoaded,
  setRepository,
  setRepositoryLoaded,
} from "../actions/repositoryActions";

function* getRepositoriesWorker(action) {
  try {
    yield put(setRepositoriesLoaded(false));

    const repositories = yield call(
      repositoryService.getRepositories,
      action.payload
    );

    yield put(setRepositories(repositories));
    yield put(setRepositoriesLoaded(true));
  } catch (error) {
    console.log(error);
  }
}

function* getRepositoryWorker(action) {
  try {
    yield put(setRepositoryLoaded(false));

    const repository = yield call(
      repositoryService.getRepository,
      action.payload.username,
      action.payload.repositoryName
    );

    yield put(setRepository(repository));
    yield put(setRepositoryLoaded(true));
  } catch (error) {
    console.log(error);
  }
}

export function* repositorySagaWatcher() {
  yield takeEvery(GET_REPOSITORIES, getRepositoriesWorker);
  yield takeEvery(GET_REPOSITORY, getRepositoryWorker);
}
