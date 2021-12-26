import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost';

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="reset" element={<LoginPasswordReset />} />
        <Route path="lost" element={<LoginPasswordLost />} />
      </Routes>
    </>
  );
};

export default Login;
