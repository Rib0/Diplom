import { getProducts } from '../actions';
import { makeRequest } from 'utils';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';

export const getProductsAsync = () => {
    return (dispatch, getState) => {
      makeRequest('GET', getProductsUrl)
        .then(JSON.parse)
        .then(data => dispatch(getProducts(data)))
        .catch(err => console.log(err))
    }
}