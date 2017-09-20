import axios from 'axios';
import { SubmissionError } from 'redux-form';


export const signUp = userData => (dispatch) => {
  axios.post('/api/register', userData)
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

export const login = userData => (dispatch) => {
  axios.post('/api/login', userData)
    .then(() => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });

  dispatch({ type: 'AUTHENTICATED_YES', payload: true });
};

export const logout = () => (dispatch) => {
  axios.get('/api/logout')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });

  dispatch({ type: 'LOGGED_OUT', payload: false });
};

export const addFlashMessage = data => ({
  type: 'ADD_FLASH_MESSAGE',
  payload: data,
});

export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
});
