import React from 'react';
import logo from '../logo.svg';

function Login() {
  return (
    <div className="Container">
      <div className="box">
        <img src={logo} alt="logo" />
          <input type="text" defaultValue="tiago@test.com" />
          <input type="password" defaultValue="123345" />
          <button onClick={() => {}}>Enter</button>
      </div>
    </div>
  );
}

export default Login;
