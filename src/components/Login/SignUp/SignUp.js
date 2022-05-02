import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SocialLogin from '../../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate()

    const navigateSignIn= () => {
        navigate('/login')
    }
    return (
        <div className=" w-50 mx-auto mt-4 login-form">
        <h2 className="text-center mx-auto title my-4">Register</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Your name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
  
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