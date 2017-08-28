import axios from 'axios';

export const login = data => dispatch => axios.post('/api/auth', data);

export const signUp = userData => dispatch => axios.post('/api/users', userData);
