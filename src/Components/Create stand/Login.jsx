// Signup.jsx
import React from 'react';
import Form from './Form'; // Assume you have a Form component
import { Link } from 'react-router-dom';

function Login() {

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Go To Stand</h2>
        <Form formType="Login" />
        <div className="m-2 text-center flex flex-col">
        <Link to="/create-stand">Don't have an account ?</Link>
        <Link to="/forgotten-stand">Forgotten the password ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
