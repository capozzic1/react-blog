import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './postsReducer';

export default combineReducers({
  posts,
  form: formReducer,
});
