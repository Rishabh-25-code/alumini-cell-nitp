import React, { Component } from "react";
import Heading from "../../components/Headings/Heading";
import "./signUp.css";

function SignUp() {
  return (
    <div className="pt-16">
      <Heading heading="SIGN UP"></Heading>
      <div className="outerDiv">
      <div class="login-box">
      <h1 className="classH1">Login</h1>
      <form className="classForm">
        <label className="classFormLabel">Email</label>
        <input type="email" placeholder="" />
        <label className="classFormLabel">Password</label>
        <input className="classFormInput" type="password" placeholder="" />
        <input className="classFormInput" type="button" value="Submit" />
      <closeform></closeform></form>
    </div>
    <p class="para-2">
      Not have an account? <a href="signup.html">Sign Up Here</a>
    </p>
      </div>
    </div>
  );
}

export default SignUp;
