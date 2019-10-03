import { toggleToast } from 'javascript/actions';

export const toggleToastAsync = data => {
  return (dispatch, getState) => {
    if (getState().toast) return;
    dispatch(toggleToast(data));
    setTimeout(() => {
      dispatch(toggleToast(false));
    }, 3000);
  };
};
