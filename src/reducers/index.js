import counterReducerfrom from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
import counterReducer from "./counter";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer

})

export default allReducers;