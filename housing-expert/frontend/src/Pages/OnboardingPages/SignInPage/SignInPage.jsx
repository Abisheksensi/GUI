import React from "react";
import SignInForm from "../../../Components/Forms/SignInForm/SignInForm";
import LoginDesign from "../../../assets/images/LoginDesign.png";
import './SignInPage.css';

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <div className="sign-in-content">
        <SignInForm />
      </div>
      <div className="sign-in-design">
        <img src={LoginDesign} alt="Sign In Design" className="sign-in-design-image" />
      </div>
    </div>
  );
};

export default SignInPage;