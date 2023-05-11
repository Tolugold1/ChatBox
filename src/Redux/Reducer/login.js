import * as prototype from "../prototype"

// login reducer

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

// signing 


export const Sign_up = (state = { isloading: true, errMess: null, message: null}, action) => {

  switch (action.type) {

    case prototype.SIGNUPLOADING:
      return { ...state, isloading: true, errMess: null, message: null}
    
    case prototype.SIGNUP_ERROR:
      return { ...state, isloading: false, errMess: action.payload, message: null}
    
    case prototype.SIGNUP_USER:
      return { ...state, isloading: false, errMess: null, message: action.payload}

    default:
      return state
  }
}


// Registered users reducer

export const RegisteredDev = (state = { isLoading: true, errMess: null, users: [] }, action) => {
  switch (action.type) {
    case prototype.REGISTERED_LOADING:
      return { ...state, isLoading: true, errMess: null, users: []}
    
    case prototype.REGISTERED_DEV_USERS:
      return { ...state, isLoading: false, errMess: null, users: action.payload }
    
    case prototype.REGISTERED_DEV_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, users: [] }
    
    default:
      return state
  }
}


// Get all messages from db

export const GetAllMsg = ( state = { isLoading: true, errMess: null, msgs: [] }, action) => {

  switch (action.type) {
    case prototype.MSG_CONTENT_LOADING:
      return { ...state, isLoading: true, errMess: null, msgs: [] }
    
    case prototype.MY_MSG_CONTENT:
      return { ...state, isLoading: false, errMess: null, msgs: action.payload }
    
    case prototype.GETTING_MSG_CONTENT_FAILED:
      return { ...state, isLoading: false, errMess: action.payload, msgs: []}
    
    default:
      return state
  }
}

