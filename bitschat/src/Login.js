import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';


function Login() {

    const signIn = () => {}
    return (
        <div className='login'>
            
            <div className='login_container'>
                <div className = 'login_text'>
                    <h1> Welcome to BITSChat!</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
            
        </div>
    )
}

export default Login
