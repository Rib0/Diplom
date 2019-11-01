// products action creators
export const getProducts = data => ({ type: 'GET_PRODUCTS', payload: data });
export const addProduct = data => ({ type: 'ADD_PRODUCT', payload: data });
export const deleteProduct = id => ({ type: 'DELETE_PRODUCT', payload: id });
export const redactProduct = data => ({
  type: 'REDACT_PRODUCT',
  payload: data,
});
