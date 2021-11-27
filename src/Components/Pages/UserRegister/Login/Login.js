import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Google from "../../../image/google.png";
import UseAuth from "../../../Shared/context/UseAuth/UseAuth";
import FullPageLoader from "../../../Shared/FullPageLoader/FullPageLoader";
import "./Login.css";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const {
    HandleGoogleSignIn,
    HandleLogInEmailAndPassword,
    setError,
    loader,
    error,
  } = UseAuth();

  const navigate = useNavigate();

  const HandleLogInFormSubmit = (d) => {
    console.log(d);
    HandleLogInEmailAndPassword(d.email, d.password, navigate);
    reset();
  };

  const HandleErrorRemove = () => {
    setError("");
  };

  return (
    <div className="pb-5">
      <Header />
      <h1 className="main-title text-center py-5 fw-bold">Login Here</h1>
      <div onBlur={HandleErrorRemove} className="log-in-form-box">
        <form onSubmit={handleSubmit(HandleLogInFormSubmit)}>
          <div className="input-form-border">
            <FloatingLabel controlId="floatingInput" label="Enter your email">
              <Form.Control
                placeholder="enter your email"
                type="email"
                {...register("email")}
                className="login-input"
                autoComplete="current-email"
              />
            </FloatingLabel>
          </div>
          <div className="input-form-border">
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter your Password"
            >
              <Form.Control
                type="password"
                placeholder="enter your passoword"
                {...register("password")}
                className="login-input"
                autoComplete="current-password"
              />
            </FloatingLabel>
          </div>
          <p className="py-2 text-danger">{error}</p>
          <input
            type="submit"
            value="Login"
            className="common-button border-0 w-100"
          />
        </form>
        <p className="create-para text-center">
          Don't Have An Account ?{" "}
          <Link className="create-link" to="/register">
            Create An Account
          </Link>
        </p>
        <div
          onClick={HandleGoogleSignIn}
          className="d-flex align-items-center google-button"
        >
          <img className="google-img" src={Google} alt="" />
          <h4 className="text-center">Continue With Google</h4>
        </div>
      </div>
      {loader && <FullPageLoader />}
    </div>
  );
};

export default Login;
