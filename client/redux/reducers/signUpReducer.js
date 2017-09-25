

export default function reducer(state = {
  signupRedirect: false,
  type: null,
  text: null,
  signedUp: null,
  loggedIn: null,
}, action) {
  switch (action.type) {
    case 'SIGNUP_REDIRECT_YES': {
      return {
        ...state, signupRedirect: action.payload,
      };
    }

    case 'ADD_FLASH_MESSAGE': {
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
        signedUp: true,
      };
    }
    case 'CLOSE_ALERT': {
      return {
        ...state,
        signedUp: false,
      };
    }
    case 'AUTHENTICATED_YES': {
      return {
        ...state,
        loggedIn: true,
      };
    }
    case 'AUTHENTICATED_NO': {
      return {
        ...state,
        loggedIn: false,
      };
    }

    case 'LOGGED_OUT': {
      return {
        ...state,
        loggedIn: false,
      };
    }
  }

  return state;
}
