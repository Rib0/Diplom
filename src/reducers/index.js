import { combineReducers } from 'redux';
import products from './products';
import comments from './comments';
import user from './user';
import admin from './admin'
import toast from './toast';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    products,
    comments,
    user,
    admin,
    toast,
    routing: routerReducer
})