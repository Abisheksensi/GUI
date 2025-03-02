import React from "react";
import { Eye, Facebook } from "lucide-react"; // Using Eye for password and Facebook for Facebook button from lucide-react
import "./LoginForm.css";


const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h1 className="form-title satoshi-font">Create an Account</h1>
      <div className="form-content">
        <div className="form-inputs">
          <div className="input-group">
            <label className="input-label satoshi-font">Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                className="input-field satoshi-font"
                placeholder="Enter Your Name"
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label satoshi-font">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                className="input-field satoshi-font"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label satoshi-font">Password</label>
            <div className="input-wrapper password-wrapper">
              <input
                type="password"
                className="input-field satoshi-font"
                placeholder="Enter Your Password"
              />
              <div className="eye-icon-wrapper">
                <Eye size={16} color="#BEBEBE" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button className="get-started-button satoshi-font">Get started</button>
          <div className="or-separator">
            <div className="separator-line"></div>
            <span className="or-text satoshi-font">Or</span>
            <div className="separator-line"></div>
          </div>
          <button className="facebook-button satoshi-font">
            <Facebook size={30} className="facebook-icon" />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;