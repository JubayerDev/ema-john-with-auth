import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleCreateUser = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match");
            return;
        }
    }

    return (
        <div className='form-container'>
            <div>
                <h1 className='form-title'>Signup</h1>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{ error}</p>
                    <input className='form-submit' type="submit" value="Signup" />
                </form>
                <p className='signup-link'>
                Already have an account? <Link to='/login'>Login</Link>
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

export default Signup;