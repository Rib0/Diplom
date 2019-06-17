import { logIn, logOut } from '../actions';
import { toggleToastAsync } from './toast';
import { makeRequest, authorize } from 'utils';

const registrationUrl = 'http://localhost:8080/api/registration.php';
const authUrl = 'http://localhost:8080/api/auth.php';

export const registration = data => {
  return dispatch => {
    makeRequest('POST', registrationUrl, data)
      .then(JSON.parse)
  }
}

export const loginIn = data => {
  return dispatch => {
    if (!data.login || !data.password) {
      dispatch(toggleToastAsync('Заполните все данные'));
      return;
    }
    makeRequest('POST', authUrl, data)
      .then(JSON.parse)
      .then(resp => {
        if (resp.error) {
          dispatch(toggleToastAsync('Неверный логин или пароль'));
          return;
        }
        dispatch(logIn(resp));
        authorize(resp);
      })
      .catch(err => console.log(err))
  }
}

export const loginOut = () => {
  return dispatch => {
    dispatch(logOut());
    authorize(null);
  }
}

