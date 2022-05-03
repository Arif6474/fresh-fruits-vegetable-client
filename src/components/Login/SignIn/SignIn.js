import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../../SocialLogin/SocialLogin";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate()
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorMessage;
      if (error) {  
          errorMessage = <p className="text-center text-danger">Error: {error?.message}</p>

        }
  if(loading){
    return <Loading></Loading>
  }
  const navigateSignUp = () => {
    navigate('/register')
  }
  const handleLogin = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);

  }
  if(user){
    navigate('/')
  }
  return (
    <div className=" w-50 mx-auto mt-4 login-form">
      <h2 className="text-center mx-auto title my-4">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email"  name= "email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        {errorMessage}
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
