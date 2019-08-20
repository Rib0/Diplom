import { combineReducers } from 'redux';
import products from './products';
import comments from './comments';
import user from './user';
import toast from './toast';

export default combineReducers({
  products,
  comments,
  user,
  toast,
});
