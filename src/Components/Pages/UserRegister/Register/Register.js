import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Header from "../../../Shared/Header/Header";
import Google from "../../../image/google.png";
import useFirebase from "../../../Shared/useFirebase/useFirebase";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  const { HandleGoogleSignIn, HandleRegisterUser, error, setError } =
    useFirebase();

  const HandleLogInFormSubmit = (d) => {
    if (d.password1.length >= 6 && d.password2.length >= 6) {
      if (d.password1 === d.password2) {
        HandleRegisterUser(d.email, d.password2, d.name);
        reset();
      } else {
        setError("Password did not match try again");
      }
    } else {
      setError("Please Give Atleast 6 Character Passoword");
    }
  };

  const HandleErrorRemove = () => {
    setError("");
  };

  return (
    <div className="pb-5">
      <Header />
      <h1 className="main-title text-center py-5 fw-bold">Create An Account</h1>
      <div onBlur={HandleErrorRemove} className="log-in-form-box">
        <form onSubmit={handleSubmit(HandleLogInFormSubmit)}>
          <div className="input-form-border">
            <FloatingLabel controlId="floatingInput" label="Enter your Name">
              <Form.Control
                placeholder="enter your name"
                type="text"
                {...register("name")}
                className="login-input"
                autoComplete="current-name"
              />
            </FloatingLabel>
          </div>
          <div className="input-form-border">
            <FloatingLabel
              controlId="floatingPassword"
              label="Enter your Email"
            >
              <Form.Control
                type="email"
                placeholder="enter your email"
                {...register("email")}
                className="login-input"
                autoComplete="current-email"
              />
            </FloatingLabel>
          </div>
          <div className="input-form-border">
            <FloatingLabel
              controlId="floatingPassword"
              label="Type your Password"
            >
              <Form.Control
                type="password"
                placeholder="enter your password"
                {...register("password1")}
                className="login-input"
                autoComplete="current-password"
              />
            </FloatingLabel>
          </div>
          <div className="input-form-border">
            <FloatingLabel
              controlId="floatingPassword"
              label="Re-type your Password"
            >
              <Form.Control
                type="password"
                placeholder="enter your password"
                {...register("password2")}
                className="login-input"
                autoComplete="current-password"
              />
            </FloatingLabel>
          </div>
          <p className="text-danger">{error}</p>
          <input
            type="submit"
            value="Create An Account"
            className="common-button border-0 w-100"
          />
        </form>
        <p className="create-para text-center">
          Already Have An Account ?{" "}
          <Link className="create-link" to="/login">
            Login
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
    </div>
  );
};

export default Register;
