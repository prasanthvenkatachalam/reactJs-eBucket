import React from "react";
import classes from "./Login.module.css";
import { useFormik } from "formik";

function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      passoword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

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
            <p>
              Welcome back! login with your data that you entered during
              registration
            </p>
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
                </div>
                <div className={classes.passContainer}>
                  <label>Password</label>
                  <div>
                    <input
                      type="password"
                      className={classes.inputBox}
                      onChange={formik.handleChange("passoword")}
                    />
                  </div>
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
