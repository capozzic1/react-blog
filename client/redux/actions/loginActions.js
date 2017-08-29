import axios from 'axios';

export const login = data => dispatch => axios.post('http://localhost:4000/api/auth', data);

export const signUp = userData => dispatch => axios.post('http://localhost:4000/api/users', userData);
