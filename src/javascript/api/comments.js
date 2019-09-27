import { getComments, addComment, deleteComment, acceptComent } from '../actions';
import { makeRequest } from 'utils';
import { toggleToastAsync } from 'api/toast';

const getCommentsUrl = 'http://localhost:8080/api/getComments.php';
const addCommentUrl = 'http://localhost:8080/api/addComment.php';
const moderateCommentUrl = 'http://localhost:8080/api/moderateComment.php';
const deleteCommentUrl = 'http://localhost:8080/api/deleteComment.php';

export const getCommentsAsync = id => {
  return dispatch => {
    makeRequest('POST', getCommentsUrl, id)
      .then(JSON.parse)
      .then(data => dispatch(getComments(data)))
      .catch(err => console.log(err));
  };
};

export const addCommentAsync = data => {
  return dispatch => {
    return makeRequest('POST', addCommentUrl, data)
      .then(id => {
        dispatch(addComment({ ...data, id: Number(id) }));
        dispatch(toggleToastAsync('Комментарий успешно отправлен'));
      })
      .catch(err => {
        dispatch(toggleToastAsync('Произошла ошибка, попробуйте позже...'));
        console.log(err);
      });
  };
};

export const deleteCommentAsync = id => {
  return dispatch => {
    makeRequest('POST', deleteCommentUrl, { id })
      .then(() => dispatch(deleteComment(id)))
      .catch(err => console.log(err));
  };
};

export const acceptComentAsync = id => {
  return dispatch => {
    makeRequest('POST', moderateCommentUrl, { id })
      .then(() => dispatch(acceptComent(id)))
      .catch(err => console.log(err));
  };
};
