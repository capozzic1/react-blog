import axios from 'axios';
import * as actions from '../constants';
import {SubmissionError} from 'redux-form';

export const signUp = userData => (dispatch) => {
  axios.post('/api/register', userData).then((response) => {
    dispatch({type: actions.SIGNUP_REDIRECT_YES, payload: true});

    console.log(response);
  }).catch((error) => {
    console.log(error.response);
    dispatch({type: actions.SIGNUP_REDIRECT_NO, payload: false});
    throw new SubmissionError({_error: 'Login failed!'});
  });
};

export const login = userData => (dispatch) => {
  axios.post('/api/login', userData).then((response) => {
    dispatch({type: actions.AUTHENTICATED_YES, payload: true});
    console.log(response);
  }).catch((error) => {
    dispatch({type: actions.AUTHENTICATED_NO, payload: false});
    console.log(error.response);
  });
};

export const dashLogged = () => (dispatch) => {
  dispatch({type: actions.AUTHENTICATED_YES, payload: true});
};

export const logout = () => (dispatch) => {
  axios.get('/api/logout').then((response) => {
    console.log(response);
  }).catch((error) => {
    console.log(error.response);
  });

  dispatch({type: actions.LOGGED_OUT, payload: false});
};

export const addFlashMessage = data => ({type: actions.ADD_FLASH_MESSAGE, payload: data});

export const closeAlert = () => ({type: actions.CLOSE_ALERT});
