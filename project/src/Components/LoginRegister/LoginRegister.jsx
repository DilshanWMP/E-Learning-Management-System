import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


function LoginRegister({ onLoginSuccess }) {
  const [action, setAction] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const registerLink = () => {
    setAction(' active');
    setError('');
    setSuccess('');
  };

  const loginLink = () => {
    setAction('');
    setError('');
    setSuccess('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        setError('');
        onLoginSuccess(data.user);
      } else {
        setError(data.error || 'Login failed');
        setSuccess('');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setSuccess('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! Please login.');
        setError('');
        loginLink();
      } else {
        setError(data.error || 'Registration failed');
        setSuccess('');
      }
    } catch (err) {
      setError('Network error. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className={`wrapper${action}`}>
      <div className="form-box login">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <form onSubmit={handleRegister}>
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" name="username" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" name="email" placeholder="Email" required />
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              I agree to the terms & conditions
            </label>
          </div>
          <button type="submit">Register</button>
          <div className="register-link">
            <p>
              Already have an account?{' '}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;