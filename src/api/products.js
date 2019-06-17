const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
import { getProducts } from '../actions';

export const getProducts = () => {
    return dispatch => {
      makeRequest('GET', getProductsUrl)
        .then(JSON.parse)
        .then(data => dispatch(getProducts(data)))
        .catch(err => console.log(err))
    }
}