import { getProducts, addProduct, deleteProduct, redactProduct } from 'javascript/actions';
import { makeRequest } from 'javascript/utils';
import { toggleToastAsync } from './toast';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
const addProductUrl = 'http://localhost:8080/api/addProduct.php';
const deleteProductUrl = 'http://localhost:8080/api/deleteProduct.php';
const redactProductUrl = 'http://localhost:8080/api/redactProduct.php';

export const getProductsAsync = () => {
  return dispatch => {
    makeRequest('GET', getProductsUrl)
      .then(JSON.parse)
      .then(data => dispatch(getProducts(data)))
      .catch(err => console.log(err));
  };
};

export const addProductAsync = (data, insertData) => {
  return dispatch => {
    return makeRequest('POST', addProductUrl, data, true)
      .then(id => dispatch(addProduct({ id, ...insertData })))
      .catch(err => {
        dispatch(toggleToastAsync('Произошла ошибка...'));
        console.log(err);
      });
  };
};

export const deleteProductAsync = id => {
  return dispatch => {
    makeRequest('POST', deleteProductUrl, { id })
      .then(() => dispatch(deleteProduct(id)))
      .catch(err => console.log(err));
  };
};

export const redactProductAsync = data => {
  return dispatch => {
    makeRequest('POST', redactProductUrl, data)
      .then(() => dispatch(redactProduct(data)))
      .catch(err => console.log(err));
  };
};
