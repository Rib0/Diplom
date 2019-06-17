import { getComments, addComment, deleteComment, acceptComent } from '../actions';

const getCommentsUrl = 'http://localhost:8080/api/getComments.php';
const addCommentUrl = 'http://localhost:8080/api/addComment.php';
const moderateCommentUrl = 'http://localhost:8080/api/moderateComment.php';
const deleteCommentUrl = 'http://localhost:8080/api/deleteComment.php';

export const getComments = id => {
  return dispatch => {
    makeRequest('POST', getCommentsUrl, id)
      .then(JSON.parse)
      .then(data => dispatch(getComments(data)))
      .catch(err => console.log(err))
  }
}

export const addComment = data => {
  return dispatch => {
    makeRequest('POST', addCommentUrl, data)
      .then(id => dispatch(addComment({ ...data, id })))
      .catch(err => console.log(err))
  }
}

export const deleteComment = id => {
  return dispatch => {
    makeRequest('POST', deleteCommentUrl, id)
      .then(() => dispatch(deleteComment(id)))
      .catch(err => console.log(err))
  }
}

export const acceptComent = id => {
  return dispatch => {
    makeRequest('POST', moderateCommentUrl, id)
      .then(() => dispatch(acceptComent(id)))
      .catch(err => console.log(err))
  }
}
