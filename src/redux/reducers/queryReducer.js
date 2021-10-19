import { SET_QUERY } from "../actions/queryActions";

const initialState = {
  query: {
    username: "",
    currentPage: 0,
  },
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: { ...state.query, ...action.payload },
      };
    default:
      return state;
  }
};

export default queryReducer;
