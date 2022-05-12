import React from "react";
import classes from "./Login.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginService } from "../ApiServices/apiCalls";
import axios from "axios";
function Login() {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Enter valid email"),
    password: yup.string().required("Password required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin();
    },
  });

  const handleLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username: "mor_2314",
        password: "83r5^_",
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json));
  };

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <div className={classes.splitLoginContainer}>
          <div className={classes.imageContainer}>
            <img
              className={classes.logoImage}
              src={require("../Assets/images/login_logo.png")}
            />
          </div>
          <div className={classes.userField}>
            <h1>Login to eBucket</h1>
            <p>Welcome back! login with your data</p>
            <div className={classes.inputContainer}>
              <form onSubmit={formik.handleSubmit}>
                <div className={classes.emailContainer}>
                  <label>Email</label>
                  <div>
                    <input
                      type="text"
                      className={classes.inputBox}
                      onChange={formik.handleChange("email")}
                    />
                  </div>

                  {formik.touched.email && formik.errors.email && (
                    <span className={classes.error}>{formik.errors.email}</span>
                  )}
                </div>
                <div className={classes.passContainer}>
                  <label>Password</label>
                  <div>
                    <input
                      type="password"
                      className={classes.inputBox}
                      onChange={formik.handleChange("password")}
                    />
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <span className={classes.error}>
                      {formik.errors.password}
                    </span>
                  )}
                </div>

                <div className={classes.submitContainer}>
                  <button
                    type="submit"
                    className={classes.submitBtn}
                    onClick={(e) => {
                      console.log(e);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
