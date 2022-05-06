import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import SocialLogin from "../../SocialLogin/SocialLogin";
import "./SignIn.css";
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {

  const navigate = useNavigate()
  let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const handleResetPassword = async () => {
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
    toast('Your password has been reset.Check email ');
    }else{
      toast('Please enter a valid email')
    }
  }
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
  if(loading || sending){
    return <Loading></Loading>
  }
  const navigateSignUp = () => {
    navigate('/register')
  }
  
  const handleLogin = async(event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

  }
  if(user){
    navigate(from, { replace: true });
   }
  return (
    <div className=" w-50 mx-auto mt-4 login-form">
      <h2 className="text-center mx-auto title my-4">Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" ref={emailRef}  placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password"  placeholder="Password" />
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
          <span onClick={handleResetPassword} className="text-info ps-2">Reset password</span>
        </p>
      </div>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignIn;
