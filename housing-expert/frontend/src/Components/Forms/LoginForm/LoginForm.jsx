import React, { useState } from "react";
import { Eye } from "lucide-react";
import "./LoginForm.css";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(data.message);
        setError('');
        setTimeout(() => navigate('/'), 2000); // Redirect to Homepage after success
      } else {
        setError(data.error);
        setSuccess('');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      setSuccess('');
    }
  };

  const handleSignIn = () => {
    navigate('/sign-in');
  };

  return (
    <div className="login-form-container">
      <h1 className="form-title satoshi-font">Create an Account</h1>
      {error && <p className="error-message satoshi-font">{error}</p>}
      {success && <p className="success-message satoshi-font">{success}</p>}
      <div className="form-content">
        <div className="form-inputs">
          <div className="input-group">
            <label className="input-label satoshi-font">Name</label>
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                className="input-field satoshi-font"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label satoshi-font">Email</label>
            <div className="input-wrapper">
              <input
                type="email"
                name="email"
                className="input-field satoshi-font"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-group">
            <label className="input-label satoshi-font">Password</label>
            <div className="input-wrapper password-wrapper">
              <input
                type="password"
                name="password"
                className="input-field satoshi-font"
                placeholder="Enter Your Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <div className="eye-icon-wrapper">
                <Eye size={16} color="#BEBEBE" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button className="get-started-button satoshi-font" onClick={handleSignup}>Get started</button>
          <div className="or-separator">
            <div className="separator-line"></div>
            <span className="or-text satoshi-font">Or</span>
            <div className="separator-line"></div>
          </div>
          <button className="facebook-button satoshi-font" onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;