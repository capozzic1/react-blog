

export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
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
      };
    }
  }

  return state;
}
