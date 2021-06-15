/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { AuthState } from './types';

const initialState: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
};

export const auth = (state = initialState, action: any): AuthState => {
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
