// Signup.jsx
import React from 'react';
import Form from './Form'; // Assume you have a Form component
import { Link } from 'react-router-dom';

function Signup() {

    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>
        <Form formType="Signup"/>
        <div className="m-2 text-center">
        <Link to="/login-stand">Already Joined ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
