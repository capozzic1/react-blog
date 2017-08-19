

export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
  currentPostInfo: [],
  redirect: false,
}, action) {
  switch (action.type) {
    case 'FETCH_POSTS_FUFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload,
      };
    }
    case 'FETCH_POSTS_REJECTED': {
      return { ...state, fetching: false, error: action.payload };
    }
    case 'DELETE_POSTS_FUFILLED': {
      return {
        ...state,
        deleted: true,
        posts: action.payload,
      };
    }
/* eslint-disable indent, linebreak-style */
    case 'FIND_SINGLE_POST': {
        const posts = state.posts;
        const len = state.posts.length;
        let postId = action.payload;
        for (let i = 0; i < len; i++){
          if (posts[i]._id === postId){
            return {
              ...state,
              currentPostInfo:posts[i],
              redirect: true
            }
          }
        }
    }

    case 'PAGE_REDIRECTED': {
      return {...state, redirect: false}
    }
  }

  return state;
}
