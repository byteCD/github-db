import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import repositoryReducer from "../reducers/repositoryReducer";
import queryReducer from "../reducers/queryReducer";

const rootReducer = combineReducers({
  userReducer,
  repositoryReducer,
  queryReducer,
});

export default rootReducer;
