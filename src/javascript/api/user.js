import { logIn, logOut } from 'javascript/actions';
import { toggleToastAsync } from './toast';
import { makeRequest, authorize } from 'javascript/utils';

const registrationUrl = 'http://localhost:8080/api/registration.php';
const authUrl = 'http://localhost:8080/api/auth.php';
const getUsersUrl = 'http://localhost:8080/api/getUsers.php';

export const registration = data => {
  return dispatch => {
    makeRequest('POST', registrationUrl, data)
      .then(JSON.parse)
      .then(resp => {
        if (resp.error) {
          dispatch(toggleToastAsync('Пользователь с таким email уже существует'));
          return;
        }
        dispatch(toggleToastAsync('Регистрация прошла успешно'));
      })
      .catch(err => {
        console.log(err);
        dispatch(toggleToastAsync('Произошла ошибка, попробуйте еще раз...'));
      });
  };
};

export const loginIn = (data, forAdmin = false) => {
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
        if (forAdmin && !resp.isadmin) {
          dispatch(toggleToastAsync('Неверный логин или пароль'));
          return;
        }
        dispatch(logIn(resp));
        authorize(resp);
      })
      .catch(err => console.log(err));
  };
};

export const loginOut = () => {
  return dispatch => {
    dispatch(logOut());
    authorize(null);
  };
};

export const getUsers = () => {
  return makeRequest('GET', getUsersUrl)
    .then(JSON.parse)
    .catch(err => console.log(err));
};
