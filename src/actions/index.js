// products action creators
export const getProducts = data => ({ type: 'GET_PRODUCTS', payload: data });
export const addProduct = data => ({ type: 'ADD_PRODUCT', payload: data });

// comments action creators
export const getComments = data => ({ type: 'GET_COMMENTS', payload: data });
export const addComment = comment => ({ type: 'ADD_COMMENT', payload: comment });
export const deleteComment = id => ({ type: 'DELETE_COMMENT', payload: id });
export const acceptComent = id => ({ type: 'ACCEPT_COMMENT', payload: id });

// user action creators
export const logIn = data => ({ type: 'LOG_IN', payload: data });
export const logOut = () => ({ type: 'LOG_OUT' });

// modal action creators
export const toggleToast = data => ({ type: 'TOGGLE_TOAST', payload: data });
