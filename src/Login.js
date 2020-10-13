import React from 'react';
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';
import logo from './IMessage_logo.png';
import './Login.css';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error)=>alert(error.meesage));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src={logo} alt=""/>
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
