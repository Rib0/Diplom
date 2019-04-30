import { makeRequest } from 'utils';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
const registrationUrl = 'http://localhost:8080/api/registration.php';
const authUrl = 'http://localhost:8080/api/auth.php';
const getCommentsUrl = 'http://localhost:8080/api/getComments.php';

export const getProducts = () => makeRequest('GET', getProductsUrl).then(JSON.parse);

export const registration = data => makeRequest('POST', registrationUrl, data).then(JSON.parse);

export const auth = data => makeRequest('POST', authUrl, data).then(JSON.parse);

export const getComments = data => makeRequest('POST', getCommentsUrl, data).then(JSON.parse);