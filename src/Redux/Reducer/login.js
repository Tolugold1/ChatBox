import * as prototype from "../prototype"
export const Login = (state = {loading: true, errMess: null, isAuthenticated: false, user: null}, action) => {
  switch (action.type) {
    case prototype.LOADINGLOGIN:
      return {...state, loading: true, errMess: null, isAuthenticated: false}
    
    case prototype.LOGIN_ERROR:
      return {...state, loading: false, errMess: action.payload, isAuthenticated: false}

    case prototype.LOGIN_USER:
      return {...state, loading: false, errMess: null, isAuthenticated: true, user: action.payload}

    case prototype.LOGOUT_LOADING:
      return { ...state, loading: true, errMess: null, isAuthenticated: true}
    
    case prototype.LOGOUT_USER:
      return { ...state, loading: false, errMess: null, isAuthenticated: false}
    
    default:
      return state
  }
}
