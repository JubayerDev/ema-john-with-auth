import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Login</h1>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='signup-link'>
                    New to Ema-John? <Link to='/signup'>Create an account</Link>
                </p>
                <div className="line-con">
                    <div className='line'></div>
                    <p>or</p>
                    <div className='line'></div>
                </div>
                <button className='google-btn'><FcGoogle /> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;