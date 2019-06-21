import { getProducts } from '../actions';
import { makeRequest } from 'utils';
import { toggleToastAsync } from './toast';
import { addProduct } from '../actions';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
const addProductUrl = 'http://localhost:8080/api/addProduct.php';

export const getProductsAsync = () => {
  return dispatch => {
    makeRequest('GET', getProductsUrl)
      .then(JSON.parse)
      .then(data => dispatch(getProducts(data)))
      .catch(err => console.log(err))
  }
}

export const addProductAsync = (data, insertData) => {
  return dispatch => {
    return makeRequest('POST', addProductUrl, data, true)
      .then(id => dispatch(addProduct({ id, ...insertData })))        
      .catch(err => {
        dispatch(toggleToastAsync('Произошла ошибка...'));
        console.log(err);
      })
  }
}