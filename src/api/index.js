import { makeRequest } from 'utils';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';

export const getProducts = () => makeRequest('GET', getProductsUrl).then(JSON.parse);