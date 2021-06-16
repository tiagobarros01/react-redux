import { action } from 'typesafe-actions';

interface RequestProps {
  email: string;
  password: string;
}

interface SuccessProps {
  token: string;
}

export const signInRequest = ({ email, password }: RequestProps) =>
  action('@auth/SIGN_IN_REQUEST', {
    email,
    password,
  });

export const signInSuccess = ({ token }: SuccessProps) =>
  action('@auth/SIGN_IN_SUCCESS', {
    token,
  });

export const signInFailure = () => action('@auth/SIGN_IN_FAILURE');
