import React from "react";
import Placeholder from "../.././Placeholders/Placeholder01"; // Import the Placeholder component
import { GoogleIcon } from "@lucid/react"; // Assuming Lucid React has a GoogleIcon (adjust based on your icon library)

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <h1 className="form-title satoshi-font">Create an Account</h1>
      <div className="form-content">
        <div className="form-inputs">
          <Placeholder label="Name" placeholder="Enter Your Name" />
          <Placeholder label="Email" placeholder="Enter Your Email" />
          <Placeholder
            label="Password"
            placeholder="Enter Your Password"
            icon={GoogleIcon} // Using GoogleIcon as an example for the eye icon (adjust as needed)
          />
        </div>
        <div className="form-actions">
          <button className="get-started-button satoshi-font">
            Get started
          </button>
          <div className="or-separator">
            <div className="separator-line"></div>
            <span className="or-text satoshi-font">Or</span>
            <div className="separator-line"></div>
          </div>
          <button className="google-button satoshi-font">
            <GoogleIcon size={30} className="google-icon" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;