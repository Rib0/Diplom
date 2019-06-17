import { combineReducers } from 'redux';
import products from './products';
import comments from './comments';
import user from './user';
import admin from './admin'

export default combineReducers({
    products,
    comments,
    user,
    admin
})