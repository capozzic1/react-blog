import axios from 'axios';
import * as actions from '../constants.js'
/* eslint disable */
// async action creators
export const fetchPosts = () => async (dispatch) => {
  dispatch({type: actions.FETCH_POSTS});
  try {
    const response = await axios.get('/posts');

    dispatch({type: actions.FETCH_POSTS_FUFILLED, payload: response.data});
  } catch (err) {
    dispatch({type: actions.FETCH_POSTS_REJECTED, payload: err});
  }
};

export const deletePosts = (posts, cb) => async (dispatch) => {
  try {
    return await axios.delete('/delete', {data: posts}).then((response) => {
      dispatch({type: actions.DELETE_POSTS_FUFILLED, payload: response.data});
    });
  } catch (err) {
    console.log(err);
  }
};

export const newPost = (title, body, date) => (dispatch) => {
  dispatch({type: actions.NEW_POST});
  try {

    return axios.post('/newpost', {
      title,
      body,
      author: 'testUser',
      date
    })
  } catch (err) {
    console.log(err);
  }
};

export const handleSave = changes => (dispatch) => {
  try {
    axios.put('/edit', {data: changes}).then((response) => {
      dispatch({type: actions.EDITED_POST, payload: response.data});
    });
  } catch (err) {
    console.log(err)
  }
};

// sync action creators
export const findSinglePost = postId => ({type: actions.FIND_SINGLE_POST, payload: postId});

export const sendEdit = editStatus => ({type: actions.CHANGE_EDIT_STATUS, payload: editStatus});

export const changeRedirect = bool => ({type: actions.CHANGE_REDIRECT_STATUS, payload: bool});

export const checkBoxChange = postId => ({type: actions.CURRENT_POST, payload: postId});
