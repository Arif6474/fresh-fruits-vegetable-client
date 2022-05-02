import React from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SocialLogin from "../../SocialLogin/SocialLogin";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate()
  const navigateSignUp = () => {
    navigate('/register')
  }
  return (
    <div className=" w-50 mx-auto mt-4 login-form">
      <h2 className="text-center mx-auto title my-4">Login</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <button className="  w-100 my-2 login-btn" type="submit">
         Login
        </button>
      </Form>
      <div className="mt-2">
        <p className="new-user">
          New to Fresh Fruits & Vegetables?
          <span onClick={navigateSignUp} className="text-info ps-2">Open an account</span>
        </p>
        <p className="new-user">
          Are you forget password?
          <span className="text-info ps-2">Reset password</span>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default SignIn;
