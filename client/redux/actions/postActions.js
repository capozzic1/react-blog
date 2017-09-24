import axios from 'axios';

export const fetchPosts = () => function (dispatch) {
  dispatch({ type: 'FETCH_POSTS' });

  axios.get('http://localhost:4000/posts')
    .then((response) => {
      dispatch({ type: 'FETCH_POSTS_FUFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_POSTS_REJECTED', payload: err });
    });
};

export const deletePosts = (posts, cb) => function (dispatch) {
  axios.delete('http://localhost:4000/delete', { data: posts })

    .then((response) => {
      dispatch({ type: 'DELETE_POSTS_FUFILLED', payload: response.data });
    });
};


export const newPost = (title, body, date) => function (dispatch) {
  axios.post('http://localhost:4000/newpost', {
    title,
    body,
    author: 'capozzic',
    date,

  })
    .then((response) => {
      dispatch({ type: 'NEW_POST', payload: response.data });
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const findSinglePost = postId => function (dispatch) {
  dispatch({ type: 'FIND_SINGLE_POST', payload: postId });
};

export const sendEdit = editStatus => function (dispatch) {
  dispatch({ type: 'CHANGE_EDIT_STATUS', payload: editStatus });
};

export const handleSave = changes => function (dispatch) {
  axios.put('http://localhost:4000/edit', { data: changes })

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
