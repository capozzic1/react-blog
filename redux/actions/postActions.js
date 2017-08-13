import axios from 'axios';

const fetchPosts = () => (dispatch) => {
  dispatch({ type: 'FETCH_POSTS' });
  console.log('TEST');
  axios.get('http://localhost:4000/posts')
    .then((response) => {
      dispatch({ type: 'FETCH_POSTS_FUFILLED', payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: 'FETCH_POSTS_REJECTED', payload: err });
    });
};

export default fetchPosts;
