import { makeRequest } from 'utils';

const getProducts = 'http://localhost:8080/api/getProducts.php';

export default {
  get: () => makeRequest('POST', getProducts).then(JSON.parse)
}