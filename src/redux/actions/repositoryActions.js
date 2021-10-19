export const GET_REPOSITORIES = "GET_REPOSITORIES";
export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const GET_REPOSITORY = "GET_REPOSITORY";
export const SET_REPOSITORY = "SET_REPOSITORY";
export const SET_REPOSITORIES_LOADED = "SET_REPOSITORIES_LOADED";
export const SET_REPOSITORY_LOADED = "SET_REPOSITORY_LOADED";

export const setRepositories = (repositories) => ({
  type: SET_REPOSITORIES,
  payload: repositories,
});
export const getRepositories = (username) => ({
  type: GET_REPOSITORIES,
  payload: username,
});
export const setRepository = (repository) => ({
  type: SET_REPOSITORY,
  payload: repository,
});
export const getRepository = (username, repositoryName) => ({
  type: GET_REPOSITORY,
  payload: { username, repositoryName },
});
export const setRepositoriesLoaded = (repositoriesLoaded) => ({
  type: SET_REPOSITORIES_LOADED,
  payload: repositoriesLoaded,
});
export const setRepositoryLoaded = (repositoryLoaded) => ({
  type: SET_REPOSITORY_LOADED,
  payload: repositoryLoaded,
});
