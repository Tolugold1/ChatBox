import { createStore, combineReducers, applyMiddleware} from "redux"
import { Login } from "./Reducer/login"
import  thunk  from "redux-thunk";
import { logger } from "redux-logger";

export const ConfigureStore = () => {
  
  const store = createStore(combineReducers({
    login: Login,

  }), applyMiddleware(thunk, logger)
  )

  return store;
}