/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

interface Props {
  email: string;
  password: string;
}

export const signinRequest = ({ email, password }: Props) => ({
  type: '@auth/SIGN_IN_REQUEST',
  payload: {
    email,
    password
  },
});
