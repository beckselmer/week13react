import React from 'react';
import './Login.css';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-header">Log In</h3>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
    </div>
  );
};

export default LoginForm;
