import { createStore, combineReducers, applyMiddleware} from "redux"
import { Login } from "./Reducer/login"
import { Sign_up } from "./Reducer/r_signup";
import  thunk  from "redux-thunk";
import { logger } from "redux-logger";

export const ConfigureStore = () => {
  
  const store = createStore(combineReducers({
    login: Login,
    signup: Sign_up,

  }), applyMiddleware(thunk, logger)
  )

  return store;
}