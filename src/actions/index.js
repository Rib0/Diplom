// products action creators
export const getProducts = data => ({ type: 'GET_PRODUCTS', payload: data });
export const sortProducts = () => ({ type: 'SORT_PRODUCTS' });
export const changeCategory = () => ({ type: 'CHANGE_CATEGORY' });
export const toggleWishlist = id => ({ type: 'TOGGLE_WISHLIST', payload: id });

// comments action creators
export const getComments = data => ({ type: 'GET_COMMENTS', payload: data });
export const addComment = comment => ({ type: 'ADD_COMMENT', payload: comment });
export const deleteComment = id => ({ type: 'DELETE_COMMENT', payload: id });
export const acceptComent = id => ({ type: 'ACCEPT_COMMENT', payload: id });

// user action creators
export const logIn = data => ({ type: 'LOG_IN', payload: data });
export const logOut = () => ({ type: 'LOG_OUT' });

// admin action creators
export const getAdminInfo = data => ({ type: 'GET_ADMIN_INFO', payload: data });

// modal action creators
export const activateModal = data => ({ type: 'ACTIVATE_MODAL', payload: data });
