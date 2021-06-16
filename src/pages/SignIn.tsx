import React from 'react';
import '../styles/pages/Login.css';
import logo from '../logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store/createStore';
import { signInRequest } from '../store/modules/auth/actions';

function SignIn() {
  const {
    auth: { loadingSignInRequest, isSignedIn, token },
  } = useSelector((state: StoreState) => state);
  const dispatch = useDispatch();

  console.log('token: ', token);

  return (
    <div className="Container">
      <div className="Box">
        <img src={logo} alt="logo" />
        <div className="Form">
          <h2>LOGIN</h2>
          <input type="text" defaultValue="tiago@test.com" />
          <input type="password" defaultValue="123345" />
          <button
            onClick={() =>
              dispatch(
                signInRequest({ email: 'tiago@test.com', password: '123456' })
              )
            }
          >{loadingSignInRequest ? 'loading...' : 'Enter'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
