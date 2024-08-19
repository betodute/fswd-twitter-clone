import React, { useState } from 'react';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true); // Track whether it's a login or signup form

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      user: {
        username,
        email,
        password
      }
    };

    if (isLogin) {
      // Handle login
      console.log('Logging in with:', username, password);
      // Add login logic here if needed
    } else {
      // Handle signup
      try {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          const errorDetails = await response.json();
          console.error('Failed to sign up:', errorDetails);
          throw new Error('Failed to sign up');
        }

        const result = await response.json();
        console.log('User created successfully:', result); // Logs the User object returned by the server
      } catch (error) {
        console.error('Error signing up:', error);
      }
    }

    // Reset form fields if needed
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="front-card col-xs-10 col-xs-offset-1">
      <div className="col-xs-6 welcome">
        {/* Your welcome text and other content goes here */}
      </div>
      <div className="log-in col-xs-4 col-xs-offset-1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="form-group">
              <input
                type="email"
                className="form-control email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <div className="form-group col-xs-8">
            <input
              type="password"
              className="form-control password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-default btn-primary col-xs-3 col-xs-offset-1">
            {isLogin ? 'Log in' : 'Sign up'}
          </button>
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
            <span> · </span>
          </label>
          <a href="#">Forgot password?</a>
        </form>
      </div>
      <button
        type="button"
        onClick={() => setIsLogin(!isLogin)}
        className="btn btn-link">
        {isLogin ? 'Need an account? Sign up' : 'Have an account? Log in'}
      </button>
    </div>
  );
};

export default AuthForm;

