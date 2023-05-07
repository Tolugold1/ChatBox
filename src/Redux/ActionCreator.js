import * as prototype from "./prototype"

export const login_user = (cred) => (dispatch) => {
  dispatch(loadingLogin(true));
  console.log(cred)
  const obj = {
    username: cred.username,
    password: cred.password
  }
  return fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  })
  .then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      localStorage.setItem("token", resp.token);
      dispatch(login(resp.status));
      window.location.assign("http://localhost:3001/Home")
    } else {
      dispatch(loginfailed(resp.err))
    }
  }).catch(err => {
    console.log(err);
  })
}

export const loadingLogin = () => ({
  type: prototype.LOADINGLOGIN
})

export const login = (response) => ({
  type: prototype.LOGIN_USER,
  payload: response
})

export const loginfailed = (response) => ({
  type: prototype.LOGIN_ERROR,
  payload: response
})

export const signup_user = (cred) => async (dispatch) => {
  dispatch(signupLogin(true));
  console.log(cred)
  const obj = {
    username: cred.username,
    password: cred.password
  }
  return fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      dispatch(signup(resp.status));
      window.location.assign("http://localhost:3001/")
    } else {
      dispatch(signupfailed(resp.err))
      window.location.assign("http://localhost:3001/")
    }
  }).catch(err => {
    console.log(err);
  })
}

export const signupLogin = () => ({
  type: prototype.SIGNUPLOADING
})

export const signup = (response) => ({
  type: prototype.SIGNUP_USER,
  payload: response
})

export const signupfailed = (response) => ({
  type: prototype.SIGNUP_ERROR,
  payload: response
})


export const signin_with_google = () => async (dispatch) => {

  window.open("http://localhost:3000/auth/google", "_self") // always take note of this line of code when creating oauth
}

export const succes_login = async () => {
  return fetch("http://localhost:3000/auth/success", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
    localStorage.setItem("token", resp.token)
  }).catch(err => console.log(err))
}


export const logOut = async () => {
  return fetch("http://localhost:3000/users/signout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    localStorage.removeItem('token');
    window.location.assign(resp.status)
  })
}


/* export const signin_with_google = () => async (dispatch) => {

  return fetch("http://localhost:3000/auth/google", {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials': 'true',
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) { 
      console.log(resp)
      dispatch(login(resp.status))
    } else {
      dispatch(loginfailed(resp.err));
    }
  }).catch(err => console.log(err));
} */