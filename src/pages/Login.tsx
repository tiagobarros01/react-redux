import React from 'react';
import '../styles/pages/Login.css';
import logo from '../logo.svg';

function Login() {
  return (
    <div className="Container">
      <div className="Box">
        <img src={logo} alt="logo" />
        <div className="Form">
          <h2>LOGIN</h2>
          <input type="text" defaultValue="tiago@test.com" />
          <input type="password" defaultValue="123345" />
          <button onClick={() => {}}>Enter</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
