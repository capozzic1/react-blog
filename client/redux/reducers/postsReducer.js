import * as actions from '../constants';

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
  boxChecked: false
}, action) {
  /* eslint-disable */
  switch (action.type) {
    case actions.FETCH_POSTS_FUFILLED:

      return {
        ...state,
        fetching: false,
        fetched: true,
        posts: action.payload
      };

    case actions.FETCH_POSTS_REJECTED:
      {
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      }
    case actions.DELETE_POSTS_FUFILLED:
      {
        return {
          ...state,
          deleted: true,
          posts: action.payload
        };
      }
    case actions.NEW_POST:
      {
        return {
          ...state
        };
      }
      /* eslint-disable indent, linebreak-style */
    case actions.FIND_SINGLE_POST:
      {
        const posts = state.posts;
        const len = state.posts.length;
        const postId = action.payload;
        for (let i = 0; i < len; i++) {
          if (posts[i]._id === postId) {
            return {
              ...state,
              currentPostInfo: posts[i]
            };
          }
        }
      }

    case actions.CHANGE_REDIRECT_STATUS:
      {
        const bool = action.payload !== 'false';

        return {
          ...state,
          redirect: bool
        };
      }

    case actions.CHANGE_EDIT_STATUS:
      {
        return {
          ...state,
          edit: action.payload
        };
      }

    case actions.EDITED_POST:
      {
        return {
          ...state,
          posts: action.payload
        };
      }
    case actions.CURRENT_POST:
      {
        if (action.payload) {
          return {
            ...state,
            editPostId: action.payload,
            boxChecked: true
          };
        }
        return {
          ...state,
          editPostId: null,
          boxChecked: false
        };
      }

    default:
  }
  return state;
}
