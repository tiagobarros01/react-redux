import { action } from 'typesafe-actions';

interface Props {
  email: string;
  password: string;
}

export const signinRequest = ({ email, password }: Props) =>
  action('@auth/SIGN_IN_REQUEST', {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  });
