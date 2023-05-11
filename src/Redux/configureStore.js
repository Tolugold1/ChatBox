import { createStore, combineReducers, applyMiddleware} from "redux"
import { Login, RegisteredDev, Sign_up, GetAllMsg } from "./Reducer/login"
import  thunk  from "redux-thunk";
import { logger } from "redux-logger";

export const ConfigureStore = () => {
  
  const store = createStore(combineReducers({
    login: Login,
    signup: Sign_up,
    registerDev: RegisteredDev,
    allmsg: GetAllMsg,

  }), applyMiddleware(thunk, logger)
  )

  return store;
}