

export default function reducer(state = {
  signupRedirect: false,
  type: null,
  text: null,
  signedUp: null,
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
  }

  return state;
}
