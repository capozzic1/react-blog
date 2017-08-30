
export default function reducer(state = {
  signupRedirect: false,
}, action) {
  switch (action.type) {
    case 'SIGNUP_REDIRECT_YES': {
      return {
        ...state, signupRedirect: action.payload,
      };
    }
    case 'SIGNUP_REDIRECT_NO' : {
      return {
        ...state, signupRedirect: action.payload,
      };
    }
  }

  return state;
}
