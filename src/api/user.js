import { logIn, logOut } from '../actions';

const registrationUrl = 'http://localhost:8080/api/registration.php';
const authUrl = 'http://localhost:8080/api/auth.php';

export const registation = data => {
  return dispatch => {
    makeRequest('POST', registrationUrl, data)
      .then(JSON.parse)
  }
}

export const loginIn = data => {
  return dispatch => {
    makeRequest('POST', authUrl, data).then(JSON.parse)
      .then(JSON.parse)
      .then(data => dispatch(logIn(data)))
  }
}

export const loginOut = () => {
  return dispatch => {
    dispatch(logOut())
  }
}

