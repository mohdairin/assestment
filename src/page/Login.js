import React, { useEffect, View, Text } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {
  loginCredential
} from "../action/index";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const successLogin = (credentialResponse) => {
    dispatch(loginCredential(credentialResponse))
    navigate('/home');
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}
    >
      <div>
        <h2 style={{ marginLeft: '30px' }}>Zurich App</h2>
        <GoogleLogin
          onSuccess={credentialResponse => {
            successLogin(credentialResponse)
          }}
          onError={() => {
            console.log('Login Failed')
          }}
        />
      </div>

    </div>)
}

export default Login;
