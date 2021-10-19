export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";
export const GET_USER = "GET_USER";
export const SET_USER = "SET_USER";
export const SET_USER_LOADED = "SET_USER_LOADED";
export const SET_USERS_LOADED = "SET_USERS_LOADED";
export const SET_USERS_ERROR = "SET_USERS_ERROR";
export const SET_USER_ERROR = "SET_USER_ERROR";

export const setUsers = (users, usersFound) => ({
  type: SET_USERS,
  payload: { users, usersFound },
});
export const getUsers = (username, page) => ({
  type: GET_USERS,
  payload: { username, page },
});
export const setUser = (users) => ({
  type: SET_USER,
  payload: users,
});
export const getUser = (username) => ({
  type: GET_USER,
  payload: username,
});
export const setUserLoaded = (userLoaded) => ({
  type: SET_USER_LOADED,
  payload: userLoaded,
});
export const setUsersLoaded = (usersLoaded) => ({
  type: SET_USERS_LOADED,
  payload: usersLoaded,
});
export const setUsersError = (usersError) => ({
  type: SET_USERS_ERROR,
  payload: usersError,
});
export const setUserError = (userError) => ({
  type: SET_USER_ERROR,
  payload: userError,
});
