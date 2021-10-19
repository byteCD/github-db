import {
  SET_REPOSITORIES,
  SET_REPOSITORY,
  SET_REPOSITORIES_LOADED,
  SET_REPOSITORY_LOADED,
} from "../actions/repositoryActions";

const initialState = {
  repositories: [],
  repository: {},
  repositoriesLoaded: true,
  repositoryLoaded: true,
  error: "",
};

const repositoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.payload,
      };
    case SET_REPOSITORY:
      return {
        ...state,
        repository: action.payload,
      };
    case SET_REPOSITORIES_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_REPOSITORY_LOADED:
      return {
        ...state,
        repositoryLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default repositoryReducer;
