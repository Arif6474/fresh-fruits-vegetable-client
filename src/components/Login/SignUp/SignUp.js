import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../../SocialLogin/SocialLogin';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';


const SignUp = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification: true});
      if(loading){
        return <Loading></Loading>
      }
      let errorMessage;
      if (error) {  
          errorMessage = <p className="text-center text-danger">Error: {error?.message}</p>

        }
    const navigateSignIn= () => {
        navigate('/login')
    }
    if(user){
        navigate('/')
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className=" w-50 mx-auto mt-4 login-form">
        <h2 className="text-center mx-auto title my-4">Register</h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" name="name" placeholder="Your name"  required/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" name="email" placeholder="Your email" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" name="password" placeholder="Password"  required/>
          </Form.Group>
        {errorMessage}
          <button className="  w-100 my-2 login-btn" type="submit">
             Register
          </button>
        </Form>
        <div className="mt-2">
          
          <p className="new-user">
            Already have an account?
            <span onClick={navigateSignIn} className="text-info ps-2"> Login</span>
          </p>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default SignUp;