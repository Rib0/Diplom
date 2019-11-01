// comments action creators
export const getComments = data => ({ type: 'GET_COMMENTS', payload: data });
export const addComment = comment => ({
  type: 'ADD_COMMENT',
  payload: comment,
});
export const deleteComment = id => ({ type: 'DELETE_COMMENT', payload: id });
export const acceptComent = id => ({ type: 'ACCEPT_COMMENT', payload: id });
