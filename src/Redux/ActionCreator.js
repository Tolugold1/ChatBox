import * as prototype from "./prototype"

export const login_user = (cred) => (dispath) => {
  dispath(loadingLogin(true));
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
  })
  .then(response => {
    if (response.ok) {
      return response
    } else {
      var err = new Error("Error" + response.status + ":" + response.statusText);
      console.log(err)
      err.response = response;
      throw err
    }
  }, (err) => {
    var errMess = new Error(err.message);
    throw errMess
  }).then(resp => resp.json())
  .then(resp => {
    localStorage.setItem("token", resp.token);

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