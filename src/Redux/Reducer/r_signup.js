import * as prototype from "../prototype";

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