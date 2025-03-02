import React from "react";
import LoginForm from "../../../Components/Forms/LoginForm/LoginForm";
import LoginDesign from "../../../assets/images/LoginDesign.png";
import './LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-content">
        <LoginForm />
      </div>
      <div className="login-design">
        <img src={LoginDesign} alt="Login Design" className="login-design-image" />
      </div>
    </div>
  );
};

export default LoginPage;