import axios from 'axios';

const fetch = require('node-fetch');

export const fetchPosts = () => function (dispatch) {
  dispatch({ type: 'FETCH_POSTS' });

  return axios.get('/posts')
    .then((response) => {
      dispatch({ type: 'FETCH_POSTS_FUFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_POSTS_REJECTED', payload: err });
    });
};

export const deletePosts = (posts, cb) => function (dispatch) {
  axios.delete('/delete', { data: posts })

    .then((response) => {
      dispatch({ type: 'DELETE_POSTS_FUFILLED', payload: response.data });
    });
};


export const newPost = (title, body, date) => function (dispatch) {
  return axios.post('/newpost', {
    title,
    body,
    author: 'testUser',
    date,

  })
    .then((response) => {
      dispatch({ type: 'NEW_POST', payload: response.data });
      console.log(response);
    });
};

export const findSinglePost = postId => function (dispatch) {
  dispatch({ type: 'FIND_SINGLE_POST', payload: postId });
};

export const sendEdit = editStatus => function (dispatch) {
  dispatch({ type: 'CHANGE_EDIT_STATUS', payload: editStatus });
};

export const handleSave = changes => function (dispatch) {
  axios.put('/edit', { data: changes })

    .then((response) => {
      dispatch({ type: 'EDITED_POST', payload: response.data });
    });
};

export const load = data => ({ type: 'LOAD', payload: data });

export const changeRedirect = () => function (dispatch) {
  dispatch({ type: 'CHANGE_REDIRECT_STATUS' });
};

export const checkBoxChange = postId => function (dispatch) {
  dispatch({ type: 'CURRENT_POST', payload: postId });
};
