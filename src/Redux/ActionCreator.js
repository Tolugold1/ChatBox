import * as prototype from "./prototype"

export const login_user = (cred) => async (dispatch) => {
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
      dispatch(login(resp.status));
      dispatch(Registered_Dev(resp.token));
      localStorage.setItem("token", resp.token);
      localStorage.setItem("id", resp.userId);
      createMsg(resp.token, resp.userId);
      dispatch(getAllMessageDBDocs(resp.token));
      window.location.assign("http://localhost:3001/Home");
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

export const Registered_Dev = (token) => async (dispatch) => {
  dispatch(register_dev_Loading(true));
  console.log("token", token)
  const Bearer = "Bearer " + token

  return fetch("http://localhost:3000/users/getUsers", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      dispatch(register_dev_users(resp.users))
    } else {
      dispatch(register_dev_fail(resp.users))
    }
  }).catch(err => console.log(err));
}

export const register_dev_Loading = () => ({
  type: prototype.REGISTERED_LOADING
})

export const register_dev_users = (response) => ({
  type: prototype.REGISTERED_DEV_USERS,
  payload: response
})

export const register_dev_fail = (response) => ({
  type: prototype.REGISTERED_DEV_FAILED,
  payload: response
})


export const succes_login = () => async (dispatch) => {
  return fetch("http://localhost:3000/auth/success", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      console.log(resp);
      dispatch(login(resp.status));
      dispatch(Registered_Dev(resp.token));
      createMsg(resp.token, resp.userDetails._id);
      dispatch(getAllMessageDBDocs(resp.token));
      localStorage.setItem("token", resp.token);
      localStorage.setItem("id", resp.userDetails._id);
    }
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
    localStorage.clear();
    window.location.assign(resp.status)
  })
}

// linkedin auth

export const signin_with_linkedin = () => async (dispatch) => {

  window.open("http://localhost:3000/auth/linkedin", "_self") // always take note of this line of code when creating oauth
}

export const linkedin_succes_login = () => async (dispatch) => {
  return fetch("http://localhost:3000/auth/linkedin/redirect", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      dispatch(login(resp.status))
      console.log(resp)
      localStorage.setItem("token", resp.token)
    }
  }).catch(err => console.log(err))
}


// Create a message collection upon signup 

export const createMsg = async (token, id) => {
  console.log("was called")
  const Bearer = "Bearer " + token;
  const obj = {
    _id: id
  }
  return fetch("http://localhost:3000/msg/pstmsg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer
    },
    body: JSON.stringify(obj)
  })
  .then(resp => resp.json())
  .then(resp => {
    console.log(resp)
  }).catch(err => console.log(err))
}

// post message to myself

export const mymsgBasedOnVisitorsId = async (cred) => {

  const Bearer = "Bearer " + localStorage.getItem('token');
  let obj = {
    visitorID: cred.visitorID,
    _id: localStorage.getItem("id"),
    mymsg: cred.mymsg,
    status: "owner"
  }
  return await fetch("http://localhost:3000/msg/mymsg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer
    },
    body: JSON.stringify(obj)
  }).then(resp => resp.json())
  .then(resp => {
    console.log(resp.status)
  })
}

export const getAllMessageDBDocs = (token) => async (dispatch) => {
  dispatch(msg_content_loading(true))
  const Bearer = "Bearer " + token;
  return await fetch("http://localhost:3000/msg/allmsg", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": Bearer
    }
  }).then(resp => resp.json())
  .then(resp => {
    if (resp.success === true) {
      dispatch(my_msg_content(resp.status));
    } else {
      dispatch(getting_msg_content_fail(resp.status))
    }
  }).catch(err => console.log(err));
}

export const msg_content_loading = () => ({
  type: prototype.MSG_CONTENT_LOADING
})

export const my_msg_content = (response) => ({
  type: prototype.MY_MSG_CONTENT,
  payload: response
})

export const getting_msg_content_fail = (response) => ({
  type: prototype.GETTING_MSG_CONTENT_FAILED,
  payload: response
})
