import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './postsReducer';
import login from './loginReducer';

export default combineReducers({
  posts,
  form: formReducer,
  login,
});
