import * as actions from '../constants';

export default function reducer(state = {
  signupRedirect: false,
  type: null,
  text: null,
  signedUp: null,
  loggedIn: null
}, action) {
  switch (action.type) {
    case actions.SIGNUP_REDIRECT_YES:
      {
        return {
          ...state,
          signupRedirect: action.payload
        };
      }

    case actions.ADD_FLASH_MESSAGE:
      {
        return {
          ...state,
          type: action.payload.type,
          text: action.payload.text,
          signedUp: true
        };
      }
    case actions.CLOSE_ALERT:
      {
        return {
          ...state,
          signedUp: false
        };
      }
    case actions.AUTHENTICATED_YES:
      {
        return {
          ...state,
          loggedIn: true
        };
      }
    case actions.AUTHENTICATED_NO:
      {
        return {
          ...state,
          loggedIn: false
        };
      }

    case actions.LOGGED_OUT:
      {
        return {
          ...state,
          loggedIn: false
        };
      }
  }

  return state;
}
