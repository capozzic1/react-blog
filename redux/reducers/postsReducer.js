

export default function reducer(state = {
  posts: [],
  fetching: false,
  fetched: false,
  error: null,
  currentPostInfo: [],
  editPostId: null,
  redirect: false,
  edit: false,
  initialVals: '',
  boxChecked: false,
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
        const postId = action.payload;
        for (let i = 0; i < len; i++) {
          if (posts[i]._id === postId) {
            return {
              ...state,
              currentPostInfo: posts[i],

            };
          }
        }
    }
    case 'CHANGE_REDIRECT_STATUS': {
      return { ...state, redirect: true };
    }

    case 'CHANGE_EDIT_STATUS': {
      return { ...state, edit: action.payload };
    }

    case 'EDITED_POST': {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case 'CURRENT_POST': {
      if (action.payload) {
        return {
          ...state,
        editPostId: action.payload,
        boxChecked: true,
        };
      }
        return {
          ...state,
          editPostId: null,
          boxChecked: false,
        };
    }

    case 'LOAD': {
      return { ...state,
            data: action.payload };
    }
  }
    return state;
}
