import axios from 'axios';
import { SubmissionError } from 'redux-form';


export const signUp = userData => (dispatch) => {
  axios.post('/api/users', userData)
    .then((response) => {
      dispatch({ type: 'SIGNUP_REDIRECT_YES', payload: true });

      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
      dispatch({ type: 'SIGNUP_REDIRECT_NO ', payload: false });
      throw new SubmissionError({ _error: 'Login failed!' });
    });
};

export const addFlashMessage = data => ({
  type: 'ADD_FLASH_MESSAGE',
  payload: data,
});

export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
});
