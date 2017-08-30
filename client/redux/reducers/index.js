import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import posts from './postsReducer';
import signup from './signUpReducer';

export default combineReducers({
  posts,
  form: formReducer,
  signup,
});
