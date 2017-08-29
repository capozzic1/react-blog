import axios from 'axios';
import { SubmissionError } from 'redux-form';

export const login = data => dispatch => axios.post('/api/auth', data);
/* eslint-disable */
export const signUp = userData => dispatch => axios.post('/api/users', userData)
