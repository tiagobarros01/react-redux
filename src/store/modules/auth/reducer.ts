import { AuthState, AuthAction } from './types';

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
};

export const auth = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };

    default:
      return state;
  }
};
