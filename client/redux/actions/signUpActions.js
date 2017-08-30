import axios from 'axios';
import { SubmissionError } from 'redux-form';


/* eslint-disable */
export const signUp = userData => dispatch => axios.post('/api/users', userData)
.then((response) => {
  dispatch({ type: 'SIGNUP_REDIRECT_YES ', payload: true})
  // this.props.history.go('/');
  console.log(response);
})
.catch((error) => {
  console.log(error.response);
  dispatch({ type: 'SIGNUP_REDIRECT_NO ', payload: false})
  throw new SubmissionError({ _error: 'Login failed!' });
});
