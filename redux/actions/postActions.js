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

export const deletePosts = posts => function (dispatch) {
  axios.delete('http://localhost:4000/delete', { data: posts })
    .then((response) => {
      dispatch({ type: 'DELETE_POSTS_FUFILLED', payload: response.data });
    });
};
