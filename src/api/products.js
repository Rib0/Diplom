import { getProducts } from '../actions';
import { makeRequest } from 'utils';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
const addProductsUrl = 'http://localhost:8080/api/addProductsUrl.php';

export const getProductsAsync = () => {
    return dispatch => {
      makeRequest('GET', getProductsUrl)
        .then(JSON.parse)
        .then(data => dispatch(getProducts(data)))
        .catch(err => console.log(err))
    }
}

export const addProductAsync = () => {
  return dispatch => {
    
  }
}