import React from 'react';
import './SocialLogin.css'
import google from '../../../src/images/google.png'
import github from '../../../src/images/github.png'

const SocialLogin = () => {
    return (
        <div>
            <div className="d-flex align-items-center">
                <div style = {{height: '1px'}} className="w-50 bg-dark"></div>
                <p className="mt-2 p-2">or</p>
                <div style = {{height: '1px'}} className="w-50 bg-dark"></div>
            </div>
            <div className="mt-2">
                <button className="social-btn btn-primary p-1 w-100"><img style={{height: '20px'}} className="rounded-circle me-2" src={google} alt="" /> Google Sign In</button>
            </div>
            <div className="my-3">
                <button className="social-btn btn-dark p-1 w-100"><img style={{height: '20px'}}  className="rounded-circle me-2"  src={github} alt="" /> Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;