import React from 'react';
import './LoginLayout.css'; 
import Login from '../Auth/Login';

const LoginLayout = ({ children }) => {
  return (
    <div className="login-layout">
      <header>Login Header</header>
      <main><Login /></main>
      <footer>Login Footer</footer>
    </div>
  );
};

export default LoginLayout;
