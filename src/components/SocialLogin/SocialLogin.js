import React from 'react';
import './SocialLogin.css'
import google from '../../../src/images/google.png'
import github from '../../../src/images/github.png'
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if(user || user2){
        navigate('/')
    }
    if (loading || loading2) {
        return <Loading></Loading>
    }
    let errorMessage;
    if (error || error2) {
       
          
        errorMessage = <p className="text-center text-danger">Error: {error?.message} {error2?.message}</p>
                  
        
      }

    return (
        <div>
            <div className="d-flex align-items-center">
                <div style = {{height: '1px'}} className="w-50 bg-dark"></div>
                <p className="mt-2 p-2">or</p>
                <div style = {{height: '1px'}} className="w-50 bg-dark"></div>
            </div>
            {errorMessage}
            <div className="mt-2">
                <button className="social-btn btn-primary p-1 w-100" onClick={() => signInWithGoogle()}><img style={{height: '20px'}} className="rounded-circle me-2" src={google} alt="" /> Google Sign In</button>
            </div>
            <div className="my-3">
                <button className="social-btn btn-dark p-1 w-100" onClick={() => signInWithGithub()}><img style={{height: '20px'}}  className="rounded-circle me-2"  src={github} alt="" /> Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;