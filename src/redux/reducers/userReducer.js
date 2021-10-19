import {
  SET_USER,
  SET_USERS,
  SET_USER_LOADED,
  SET_USERS_LOADED,
  SET_USERS_ERROR,
  SET_USER_ERROR,
} from "../actions/userActions";

const initialState = {
  users: [],
  user: {},
  usersFound: 0,
  userLoaded: true,
  usersLoaded: true,
  usersError: "",
  userError: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users,
        usersFound: action.payload.usersFound,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_USER_LOADED:
      return {
        ...state,
        userLoaded: action.payload,
      };
    case SET_USERS_LOADED:
      return {
        ...state,
        usersLoaded: action.payload,
      };
    case SET_USERS_ERROR:
      return {
        ...state,
        usersError: action.payload,
      };
    case SET_USER_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
