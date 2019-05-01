import { makeRequest } from 'utils';

const getProductsUrl = 'http://localhost:8080/api/getProducts.php';
const registrationUrl = 'http://localhost:8080/api/registration.php';
const authUrl = 'http://localhost:8080/api/auth.php';
const getCommentsUrl = 'http://localhost:8080/api/getComments.php';
const addCommentUrl = 'http://localhost:8080/api/addComment.php';
const moderateCommentUrl = 'http://localhost:8080/api/moderateComment.php';
const deleteCommentUrl = 'http://localhost:8080/api/deleteComment.php';

export const getProducts = () => makeRequest('GET', getProductsUrl).then(JSON.parse);

export const registration = data => makeRequest('POST', registrationUrl, data).then(JSON.parse);

export const auth = data => makeRequest('POST', authUrl, data).then(JSON.parse);

export const getComments = data => makeRequest('POST', getCommentsUrl, data).then(JSON.parse);

export const addComment = data => makeRequest('POST', addCommentUrl, data);

export const moderateComment = data => makeRequest('POST', moderateCommentUrl, data);

export const deleteComment = data => makeRequest('POST', deleteCommentUrl, data);